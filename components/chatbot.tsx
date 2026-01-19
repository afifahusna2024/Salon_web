"use client"

import { useState } from "react"
import { MessageCircle, X, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

const questions = [
  {
    question: "What services do you offer?",
    answer:
      "We offer a wide range of premium beauty services including waxing, facials (Hydra, De-Tan, Fresh Fruits), hand & leg spa, hair treatments (Keratin, Protein, Deep Conditioning), hair styling, makeup, nail services, and threading. Visit our Services section for the complete list!",
  },
  {
    question: "Where is the salon located?",
    answer:
      "We are located at Al Khalidiya, Talal Market, Same Building, Mezzanine Floor, Abu Dhabi, UAE. We'd love to welcome you to our luxurious space!",
  },
  {
    question: "How can I book an appointment?",
    answer:
      "You can easily book an appointment through WhatsApp! Simply click the 'Book Appointment' button or message us directly at +971 588630208. We'll get back to you promptly to confirm your booking.",
  },
  {
    question: "What are your working hours?",
    answer:
      "We are open daily from 10:00 AM to 10:00 PM. Our team is ready to serve you throughout these hours. For appointments outside regular hours, please contact us to discuss availability.",
  },
]

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null)
  const [isTyping, setIsTyping] = useState(false)
  const [showAnswer, setShowAnswer] = useState(false)

  const handleQuestionClick = (index: number) => {
    setSelectedQuestion(index)
    setIsTyping(true)
    setShowAnswer(false)

    // Simulate typing delay
    setTimeout(() => {
      setIsTyping(false)
      setShowAnswer(true)
    }, 1500)
  }

  const handleAskAnother = () => {
    setSelectedQuestion(null)
    setShowAnswer(false)
  }

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center ${
          isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"
        }`}
        aria-label="Open chat"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-6 right-6 z-50 w-[350px] max-w-[calc(100vw-48px)] bg-card rounded-2xl shadow-2xl border border-border overflow-hidden transition-all duration-300 ${
          isOpen
            ? "scale-100 opacity-100"
            : "scale-90 opacity-0 pointer-events-none"
        }`}
      >
        {/* Header */}
        <div className="bg-primary text-primary-foreground p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-background/20 flex items-center justify-center">
              <span className="text-2xl">💜</span>
            </div>
            <div>
              <h3 className="font-semibold text-sm">Beauty Assistant</h3>
              <p className="text-xs text-primary-foreground/80">
                {"We're here to help!"}
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="w-8 h-8 rounded-full hover:bg-background/20 flex items-center justify-center transition-colors"
            aria-label="Close chat"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chat Content */}
        <div className="p-4 h-[350px] overflow-y-auto">
          {selectedQuestion === null ? (
            <>
              {/* Welcome Message */}
              <div className="bg-muted rounded-2xl rounded-tl-none p-3 mb-4 max-w-[85%]">
                <p className="text-sm text-foreground">
                  Hi there! 👋 Welcome to Main Avenue Ladies Beauty Salon. How can I
                  help you today?
                </p>
              </div>

              {/* Questions List */}
              <div className="space-y-2">
                {questions.map((q, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuestionClick(index)}
                    className="w-full text-left p-3 rounded-xl bg-primary/5 hover:bg-primary/10 border border-primary/20 hover:border-primary/40 transition-all duration-200 text-sm text-foreground"
                  >
                    {q.question}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <>
              {/* Selected Question */}
              <div className="flex justify-end mb-4">
                <div className="bg-primary text-primary-foreground rounded-2xl rounded-tr-none p-3 max-w-[85%]">
                  <p className="text-sm">{questions[selectedQuestion].question}</p>
                </div>
              </div>

              {/* Typing Animation */}
              {isTyping && (
                <div className="bg-muted rounded-2xl rounded-tl-none p-3 max-w-[85%]">
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-primary/60 rounded-full animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-2 h-2 bg-primary/60 rounded-full animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" />
                  </div>
                </div>
              )}

              {/* Answer */}
              {showAnswer && (
                <>
                  <div className="bg-muted rounded-2xl rounded-tl-none p-3 mb-4 max-w-[85%]">
                    <p className="text-sm text-foreground leading-relaxed">
                      {questions[selectedQuestion].answer}
                    </p>
                  </div>

                  {/* Ask Another Button */}
                  <Button
                    onClick={handleAskAnother}
                    variant="outline"
                    size="sm"
                    className="gap-2 bg-transparent"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Ask another question
                  </Button>
                </>
              )}
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-3 border-t border-border bg-muted/50">
          <a
            href="https://wa.me/971588630208?text=Hi%20I%20I%20want%20to%20book%20an%20appointment%20at%20Main%20Avenue%20Salon"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2 px-4 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-lg text-sm font-medium transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </>
  )
}
