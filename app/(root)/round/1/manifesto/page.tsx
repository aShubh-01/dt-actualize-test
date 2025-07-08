"use client"
import GrowthManifesto from '@/components/manifesto/GrowthManifesto';
import { useToast } from '@/components/Toast';
import { updateUserStatus } from '@/lib/apiUtil';
import axios from 'axios';
import { Copy } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';





export default function ManifestoPage() {
  const { data: session, status } = useSession();
  const { showToast } = useToast();
  const router = useRouter();

  // if(status != 'authenticated') router.push('/login');
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

  const handleChange = (id: number, value: string) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText('https://chat.whatsapp.com/invite-link');
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

  return (

    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-3">

          <p className=" text-blue-600 text-xl leading-relaxed max-w-2xl mx-auto font-sans font-semibold">
            You've explored five real moments where systems met people. Now, answer these three questions with your own intellect, rigor and experience.
          </p>
        </div>

        <div className="max-w-3xl mx-auto p-6 space-y-6 bg-white rounded-xl shadow-lg mt-10">

          {questions.map((question) => (
            <div key={question.id} className="space-y-2">
              <label className="block text-gray-900 text-lg">
                {question.questionText}
              </label>
              <div className="relative">
                <textarea
                  placeholder="Share your answer"
                  rows={3}
                  value={answers[question.id]}
                  onChange={(e) => handleChange(question.id, e.target.value)}
                  className="w-full border-2 border-gray-200 rounded-2xl p-4 text-gray-800 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all resize-none placeholder-gray-400 bg-white shadow-sm hover:shadow-md"
                />
              </div>
            </div>
          ))}

          <button
            onClick={handleManifestoSubmit}
            className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all"
          >
            Submit
          </button>
        </div>
      </div>

      {/* Feedback Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white w-full max-w-2xl p-6 rounded-2xl shadow-lg">
            {loading ? (
              <div className="text-center py-12">
                <div className="loader mx-auto mb-4 w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                <p className="text-gray-700">Submitting your manifesto...</p>
              </div>
            ) : (
              <div>
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Round 1 Completed!</h2>
                <div className='my-8'>
                  <h2 className="text-xl font-semibold text-blue-600 flex justify-center">Thanks for Staying Sharp.</h2>
                  <p className="text-gray-700 text-md flex justify-center">
                    To Process to Round 2, Copy the Link or Click the Button to Join the Whatsapp Group.
                  </p>
                </div>
                <div className="flex justify-center items-center gap-2">
                  <a
                    title="Join Whatsapp Group"
                    href="https://chat.whatsapp.com/invite-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center mt-4 px-5 py-2 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all"
                  >
                    Join Round 2 WhatsApp Group
                  </a>
                  <button
                    title="Copy Whatsapp Invite Link"
                    onClick={handleCopyLink}
                    className="flex mt-4 p-2 h-10 w-10 justify-center items-center rounded-xl border border-gray-300 hover:bg-gray-100"

                  >
                    <Copy className="w-4 h-4 text-gray-600" />
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