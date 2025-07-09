"use client"
import GrowthManifesto from '@/components/manifesto/GrowthManifesto';
import { useToast } from '@/components/Toast';
import { updateUserStatus } from '@/lib/apiUtil';
import axios from 'axios';
import { Copy } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';


export default function ManifestoPage() {
  const { data: session, status } = useSession();
  const { showToast } = useToast();
  const router = useRouter();
  const [whatsappLink, setWhatsappLink] = useState('');

  if(status != 'authenticated') router.push('/login');
  const questions = [
    {
      id: 1,
      questionText:
        `When AI gave answers that didn’t match what you wanted, how did you fix them?
Can you share one time this happened?
What did you learn from that experience?`,
    },
    {
      id: 2,
      questionText:
        `When you worked with AI, how did you design your prompts?
Did you think carefully and experiment, or mostly reuse prompts you already had?
What helped you decide what to try?`,
    },
    {
      id: 3,
      questionText:
        `Why are you excited about this role?
How do you think it can help you grow personally and professionally?
In what way does this role connect with the kind of impact you want to create in the world?`,
    },
  ];

  const [showModal, setShowModal] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);
  const [answers, setAnswers] = useState<Record<number, string>>({
    1: '',
    2: '',
    3: '',
  });

  useEffect(() => {
    if(!session) {
      showToast('error', 'User Session Not Found', 3000);
      return
    }
    async function getManifestoData() {
      const response = await axios.get(`/api/v1/round/1/manifesto?userId=${session?.user?.uid}`, {
        validateStatus: (status) => { return status < 500 }
      });

      if(response.status == 409) {
        setWhatsappLink(response.data.whatsappLink)
        setShowModal(true)
      }
    }

    getManifestoData()
  }, [])

  const handleChange = (id: number, value: string) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(whatsappLink);
    showToast('success', 'Link Copied to clipboard!', 2000);
  };

  const handleManifestoSubmit = async () => {
    const allFilled = Object.values(answers).every((ans) => ans.trim() !== '');
    const allWithinLimit = Object.values(answers).every((ans) => ans.trim().length <= 1000);
    if (!allFilled) {
      showToast('error', 'Please reflect on all 3 question', 3000);
      return;
    }

    if (!allWithinLimit) {
      showToast('error', 'Each answer must be 1000 characters or less', 3000);
      return;
    }

    setShowModal(true);
    setLoading(true);

    const payload = {
      userId: session?.user.uid,
      user_email: session?.user.email,
      q1: answers[1],
      q2: answers[2],
      q3: answers[3],
    };

    try {
      const response = await axios.post(
        `/api/v1/round/1/manifesto`,
        payload,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );


      if (response.status === 200) {
        setLoading(false);
        setWhatsappLink(response.data.whatsappLink);
        showToast('success', 'Manifesto Submitted', 3000);
      } else {
        setLoading(false);
        setShowModal(false);
        showToast('error', 'Unable to submit manifesto', 3000);
      }
    } catch (error) {
      console.error(error);
      showToast('error', 'Something went wrong', 3000);
    }

  };

  return  (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-3xl mx-auto">
        {/* Instruction */}
        <div className="text-center mb-8">
          <p className="text-blue-600 text-lg sm:text-xl font-semibold leading-relaxed max-w-2xl mx-auto">
            You’ve explored five real moments where systems met people. Now, answer these three questions with your own intellect, rigor, and experience.
          </p>
        </div>

        {/* Question Form */}
        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 space-y-6">
          {questions.map((question) => (
            <div key={question.id} className="space-y-3">
              <label className="block text-gray-900 font-semibold text-base sm:text-lg">
                {question.questionText}
              </label>
              <textarea
                placeholder="Share your answer..."
                rows={4}
                value={answers[question.id]}
                onChange={(e) => handleChange(question.id, e.target.value)}
                className="w-full border-2 border-gray-200 rounded-2xl p-4 text-gray-800 bg-white focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 placeholder-gray-400 resize-none shadow-sm hover:shadow-md transition-all"
              />
            </div>
          ))}

          <button
            onClick={handleManifestoSubmit}
            className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all"
          >
            Submit
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-4">
          <div className="bg-white w-full max-w-xl p-6 rounded-2xl shadow-lg">
            {loading ? (
              <div className="text-center py-12">
                <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-gray-700">Submitting your manifesto...</p>
              </div>
            ) : (
              <div>
                <h2 className="text-lg font-bold text-gray-800 mb-4">Round 1 Completed!</h2>
                <div className="my-6 text-center space-y-2">
                  <p className="text-blue-600 text-xl font-semibold">Thanks for staying sharp.</p>
                  <p className="text-gray-700 text-sm sm:text-base">
                    To proceed to Round 2, copy the link or click the button to join the WhatsApp group.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all text-center"
                  >
                    Join Round 2 WhatsApp Group
                  </a>
                  <button
                    onClick={handleCopyLink}
                    className="p-2 border rounded-xl hover:bg-gray-100 transition"
                    title="Copy WhatsApp Invite Link"
                  >
                    <Copy className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}