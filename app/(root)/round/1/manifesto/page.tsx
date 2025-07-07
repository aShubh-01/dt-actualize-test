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

  if(status != 'authenticated') router.push('/login');
  const questions = [
    {
      id: 1,
      questionText:
        "When AI responses didn’t align with your intent, how did you notice the deviation and what steps did you take to correct it? Share one failed attempt and what you learned from it.",
    },
    {
      id: 2,
      questionText:
        "While using AI, what was your approach to prompting? Did you craft your own prompts with intent, or rely on existing ones? What decisions guided your iterations?",
    },
    {
      id: 3,
      questionText:
        "Why do you want to commit to this role, in the context of your growth and our mission? How does this opportunity fit into the kind of impact you want to create?",
    },
  ];


  const [feedback, setFeedback] = useState<string>('');
  const [showModal, setShowModal] = useState<boolean>(false);
  const [loadingFeedback, setLoadingFeedback] = useState(false);
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
    showToast('success', 'Link copied to clipboard!', 2000);
  };

  const handleManifestoSubmit = async () => {
    const allFilled = Object.values(answers).every((ans) => ans.trim() !== '');
    if (!allFilled) {
      showToast('error', 'Manifesto Empty', 3000);
      return;
    }

    setShowModal(true);
    setLoadingFeedback(true);

    const payload = {
      candidate_name: session?.user.name,
      candidate_id: session?.user.uid,
      candidate_email: session?.user.email,
      q1: answers[1],
      q2: answers[2],
      q3: answers[3],
    };



    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/evaluate`,
        payload,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );


      if (response.status === 200) {
        setFeedback(response.data.feedback);
        setLoadingFeedback(false);
        showToast('success', 'Feedback received!', 3000);
      } else {
        setLoadingFeedback(false);
        showToast('error', 'Unable to evaluate manifesto', 3000);
      }
    } catch (error) {
      console.error(error);
      setLoadingFeedback(false);
      showToast('error', 'Something went wrong', 3000);
    }

  };

  return (

    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-3">

          <p className=" text-blue-600 text-lg leading-relaxed max-w-xl mx-auto font-sans font-semibold">
            You've explored five real moments where systems met people. Now, answer the three questions with your own intellect and experience.
          </p>
        </div>

        <div className="max-w-3xl mx-auto p-6 space-y-6 bg-white rounded-xl shadow-lg mt-10">

          {questions.map((question) => (
            <div key={question.id} className="space-y-2">
              <label className="block text-gray-900 text-md">
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
          <div className="bg-white w-full max-w-xl p-6 rounded-2xl shadow-lg">
            {loadingFeedback ? (
              <div className="text-center py-12">
                <div className="loader mx-auto mb-4 w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                <p className="text-gray-700">Evaluating your manifesto...</p>
              </div>
            ) : (
              <div>
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Feedback</h2>
                <p className="text-gray-700 whitespace-pre-wrap">{feedback}</p>
                <div className='my-8'>
                <h2 className="text-xl font-semibold text-blue-600 flex justify-center">You're one step closer to becoming a leader 🎉.</h2>
                <p className="text-gray-700 text-sm flex justify-center">
                  Your reflection shows intent — you're now ready for Round 2.
                </p>
                </div>
                <div className="flex justify-center items-center gap-2">
                <a
              href="https://chat.whatsapp.com/invite-link"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center mt-4 px-5 py-2 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all"
            >
              Join Round 2 WhatsApp Group
            </a>
            <button
                  onClick={handleCopyLink}
                  className="flex mt-3 p-2 items-center rounded-xl border border-gray-300 hover:bg-gray-100"
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