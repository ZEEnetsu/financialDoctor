"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";
import { 
  BookOpen, 
  Download, 
  Award, 
  CheckCircle2, 
  XCircle,
  Brain,
  FileText,
  Video,
  PlayCircle,
  Trophy,
  Clock
} from "lucide-react";

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export function IC38ExamSection() {
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  const [showResults, setShowResults] = useState(false);
  const [currentTab, setCurrentTab] = useState("overview");

  const examInfo = {
    duration: "60 minutes",
    totalQuestions: "50 questions",
    passingMarks: "35 out of 50",
    examFee: "₹500",
    validity: "Lifetime",
  };

  const studyMaterials = [
    {
      icon: FileText,
      title: "Official IRDA IC38 Study Guide",
      description: "Comprehensive study material covering all exam topics",
      type: "PDF",
      size: "2.5 MB",
    },
    {
      icon: Video,
      title: "Video Tutorial Series",
      description: "12-hour video course with detailed explanations",
      type: "Video Course",
      size: "20 Lessons",
    },
    {
      icon: BookOpen,
      title: "Practice Question Bank",
      description: "500+ practice questions with detailed solutions",
      type: "PDF",
      size: "1.8 MB",
    },
    {
      icon: Brain,
      title: "Quick Revision Notes",
      description: "One-page summaries of all important topics",
      type: "PDF",
      size: "800 KB",
    },
  ];

  const quizQuestions: QuizQuestion[] = [
    {
      id: 1,
      question: "What does IRDA stand for?",
      options: [
        "Indian Revenue Development Authority",
        "Insurance Regulatory and Development Authority",
        "Indian Regulatory Department of Accounts",
        "Insurance Revenue and Distribution Agency"
      ],
      correctAnswer: 1,
      explanation: "IRDA stands for Insurance Regulatory and Development Authority of India, which regulates and promotes the insurance industry."
    },
    {
      id: 2,
      question: "What is the minimum age to become an insurance agent in India?",
      options: [
        "16 years",
        "18 years",
        "21 years",
        "25 years"
      ],
      correctAnswer: 1,
      explanation: "The minimum age requirement to become an insurance agent in India is 18 years as per IRDA regulations."
    },
    {
      id: 3,
      question: "What is the validity period of the IC38 certification?",
      options: [
        "1 year",
        "3 years",
        "5 years",
        "Lifetime"
      ],
      correctAnswer: 3,
      explanation: "The IC38 certification is valid for a lifetime and does not require renewal."
    },
    {
      id: 4,
      question: "What is the passing percentage for the IC38 exam?",
      options: [
        "50%",
        "60%",
        "70%",
        "80%"
      ],
      correctAnswer: 2,
      explanation: "The passing percentage for IC38 exam is 70%, which means you need to score at least 35 marks out of 50."
    },
    {
      id: 5,
      question: "Which of the following is NOT a principle of insurance?",
      options: [
        "Utmost Good Faith",
        "Insurable Interest",
        "Maximum Profit",
        "Indemnity"
      ],
      correctAnswer: 2,
      explanation: "Maximum Profit is not a principle of insurance. The main principles include Utmost Good Faith, Insurable Interest, Indemnity, Contribution, Subrogation, Proximate Cause, and Loss Minimization."
    },
  ];

  const handleAnswerSelect = (questionId: number, optionIndex: number) => {
    if (!showResults) {
      setSelectedAnswers({
        ...selectedAnswers,
        [questionId]: optionIndex,
      });
    }
  };

  const handleSubmitQuiz = () => {
    setShowResults(true);
  };

  const handleResetQuiz = () => {
    setSelectedAnswers({});
    setShowResults(false);
  };

  const calculateScore = () => {
    let correct = 0;
    quizQuestions.forEach((question) => {
      if (selectedAnswers[question.id] === question.correctAnswer) {
        correct++;
      }
    });
    return {
      correct,
      total: quizQuestions.length,
      percentage: Math.round((correct / quizQuestions.length) * 100),
    };
  };

  const score = showResults ? calculateScore() : null;

  const topicCoverage = [
    { topic: "Insurance Principles", percentage: 20 },
    { topic: "Life Insurance Products", percentage: 25 },
    { topic: "Health Insurance", percentage: 15 },
    { topic: "General Insurance", percentage: 20 },
    { topic: "Regulations & Ethics", percentage: 20 },
  ];

  return (
    <section id="ic38-prep" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-[#D4AF37]/10 rounded-full mb-4">
            <span className="text-[#D4AF37]" style={{ fontSize: "0.875rem", fontWeight: 600 }}>
              Exam Preparation
            </span>
          </div>
          <h2 className="text-[#0A2540] mb-4" style={{ fontSize: "2.5rem", fontWeight: 700 }}>
            IRDA IC38 <span className="text-[#D4AF37]">Exam Preparation</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto" style={{ fontSize: "1.125rem" }}>
            Everything you need to pass the IC38 exam and kickstart your insurance career
          </p>
        </motion.div>

        <Tabs value={currentTab} onValueChange={setCurrentTab} className="w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 h-auto mb-8">
            <TabsTrigger value="overview" className="py-3">
              <Award className="w-4 h-4 mr-2" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="resources" className="py-3">
              <BookOpen className="w-4 h-4 mr-2" />
              Study Resources
            </TabsTrigger>
            <TabsTrigger value="quiz" className="py-3">
              <Brain className="w-4 h-4 mr-2" />
              Practice Quiz
            </TabsTrigger>
            <TabsTrigger value="tips" className="py-3">
              <Trophy className="w-4 h-4 mr-2" />
              Exam Tips
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview">
            <div className="grid lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-[#0A2540]">About IC38 Exam</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600" style={{ lineHeight: 1.7 }}>
                      The IRDA IC38 exam is a mandatory certification for anyone who wants to become 
                      an insurance agent in India. This examination tests your knowledge of insurance 
                      fundamentals, regulations, and ethical practices.
                    </p>

                    <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Duration:</span>
                        <Badge className="bg-[#0A2540]">{examInfo.duration}</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Total Questions:</span>
                        <Badge className="bg-[#0A2540]">{examInfo.totalQuestions}</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Passing Marks:</span>
                        <Badge className="bg-green-600">{examInfo.passingMarks}</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Exam Fee:</span>
                        <Badge className="bg-[#D4AF37] text-[#0A2540]">{examInfo.examFee}</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Validity:</span>
                        <Badge className="bg-green-600">{examInfo.validity}</Badge>
                      </div>
                    </div>

                    <div className="pt-4">
                      <Button className="w-full bg-[#0A2540] hover:bg-[#0A2540]/90">
                        Register for IC38 Exam
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-[#0A2540]">Exam Topic Coverage</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {topicCoverage.map((topic, index) => (
                      <div key={topic.topic}>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-700" style={{ fontSize: "0.875rem" }}>
                            {topic.topic}
                          </span>
                          <span className="text-[#D4AF37]" style={{ fontSize: "0.875rem", fontWeight: 600 }}>
                            {topic.percentage}%
                          </span>
                        </div>
                        <Progress value={topic.percentage} className="h-2" />
                      </div>
                    ))}

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
                      <div className="flex items-start gap-3">
                        <Clock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="text-blue-900 mb-1" style={{ fontWeight: 600 }}>
                            Preparation Timeline
                          </h4>
                          <p className="text-blue-700" style={{ fontSize: "0.875rem" }}>
                            Most candidates prepare for 2-4 weeks. With our comprehensive study 
                            materials and guidance, you can be exam-ready in just 2 weeks!
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </TabsContent>

          {/* Resources Tab */}
          <TabsContent value="resources">
            <div className="grid md:grid-cols-2 gap-6">
              {studyMaterials.map((material, index) => (
                <motion.div
                  key={material.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                    <CardContent className="p-6">
                      <div className="w-14 h-14 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center mb-4">
                        <material.icon className="w-7 h-7 text-[#D4AF37]" />
                      </div>

                      <h3 className="text-[#0A2540] mb-2" style={{ fontSize: "1.25rem", fontWeight: 600 }}>
                        {material.title}
                      </h3>

                      <p className="text-gray-600 mb-4" style={{ lineHeight: 1.7 }}>
                        {material.description}
                      </p>

                      <div className="flex items-center justify-between mb-4">
                        <Badge variant="outline" className="text-[#0A2540]">
                          {material.type}
                        </Badge>
                        <span className="text-gray-500" style={{ fontSize: "0.875rem" }}>
                          {material.size}
                        </span>
                      </div>

                      <Button 
                        className="w-full bg-[#0A2540] hover:bg-[#0A2540]/90"
                        variant="default"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download Resource
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Video Course CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 bg-gradient-to-r from-[#0A2540] to-[#1a3a5c] rounded-2xl p-8 text-white"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="mb-4" style={{ fontSize: "1.75rem", fontWeight: 700 }}>
                    Complete Video Course
                  </h3>
                  <p className="text-gray-200 mb-6" style={{ lineHeight: 1.7 }}>
                    Get access to our comprehensive 12-hour video course with detailed explanations, 
                    real-world examples, and tips from industry experts.
                  </p>
                  <Button className="bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-[#0A2540]">
                    <PlayCircle className="w-4 h-4 mr-2" />
                    Access Video Course
                  </Button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                    <div className="text-[#D4AF37]" style={{ fontSize: "2rem", fontWeight: 700 }}>20</div>
                    <div style={{ fontSize: "0.875rem" }}>Video Lessons</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                    <div className="text-[#D4AF37]" style={{ fontSize: "2rem", fontWeight: 700 }}>12hrs</div>
                    <div style={{ fontSize: "0.875rem" }}>Total Duration</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                    <div className="text-[#D4AF37]" style={{ fontSize: "2rem", fontWeight: 700 }}>500+</div>
                    <div style={{ fontSize: "0.875rem" }}>Practice Qs</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                    <div className="text-[#D4AF37]" style={{ fontSize: "2rem", fontWeight: 700 }}>95%</div>
                    <div style={{ fontSize: "0.875rem" }}>Pass Rate</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </TabsContent>

          {/* Quiz Tab */}
          <TabsContent value="quiz">
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gray-50 border-b">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-[#0A2540]">Practice Quiz - Sample Questions</CardTitle>
                  {showResults && (
                    <Badge 
                      className={`${
                        score && score.percentage >= 70 
                          ? "bg-green-600" 
                          : "bg-red-600"
                      } text-white`}
                    >
                      Score: {score?.correct}/{score?.total} ({score?.percentage}%)
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent className="p-6">
                {!showResults && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                    <p className="text-blue-900" style={{ fontSize: "0.875rem" }}>
                      Answer all questions and click "Submit Quiz" to see your results. 
                      You need 70% to pass the actual exam.
                    </p>
                  </div>
                )}

                <div className="space-y-8">
                  {quizQuestions.map((question, qIndex) => (
                    <div key={question.id} className="pb-6 border-b last:border-b-0">
                      <div className="flex gap-3 mb-4">
                        <Badge className="bg-[#0A2540]">Q{qIndex + 1}</Badge>
                        <p className="flex-1" style={{ fontWeight: 500 }}>
                          {question.question}
                        </p>
                      </div>

                      <div className="space-y-3 pl-12">
                        {question.options.map((option, optIndex) => {
                          const isSelected = selectedAnswers[question.id] === optIndex;
                          const isCorrect = optIndex === question.correctAnswer;
                          const showCorrectAnswer = showResults && isCorrect;
                          const showWrongAnswer = showResults && isSelected && !isCorrect;

                          return (
                            <div
                              key={optIndex}
                              onClick={() => handleAnswerSelect(question.id, optIndex)}
                              className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                                showCorrectAnswer
                                  ? "border-green-500 bg-green-50"
                                  : showWrongAnswer
                                  ? "border-red-500 bg-red-50"
                                  : isSelected
                                  ? "border-[#D4AF37] bg-[#D4AF37]/5"
                                  : "border-gray-200 hover:border-gray-300"
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <span className={showCorrectAnswer || showWrongAnswer ? "font-medium" : ""}>
                                  {option}
                                </span>
                                {showCorrectAnswer && (
                                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                                )}
                                {showWrongAnswer && (
                                  <XCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {showResults && (
                        <div className="mt-4 pl-12 bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                          <p className="text-blue-900" style={{ fontSize: "0.875rem" }}>
                            <span style={{ fontWeight: 600 }}>Explanation: </span>
                            {question.explanation}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex gap-4">
                  {!showResults ? (
                    <Button
                      onClick={handleSubmitQuiz}
                      disabled={Object.keys(selectedAnswers).length !== quizQuestions.length}
                      className="flex-1 bg-[#0A2540] hover:bg-[#0A2540]/90"
                    >
                      Submit Quiz
                    </Button>
                  ) : (
                    <>
                      <Button
                        onClick={handleResetQuiz}
                        variant="outline"
                        className="flex-1"
                      >
                        Retry Quiz
                      </Button>
                      <Button
                        className="flex-1 bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-[#0A2540]"
                        asChild
                      >
                        <a href="#contact">Get Full Practice Test</a>
                      </Button>
                    </>
                  )}
                </div>

                {showResults && score && (
                  <div className={`mt-6 p-6 rounded-xl ${
                    score.percentage >= 70 
                      ? "bg-green-50 border-2 border-green-500" 
                      : "bg-red-50 border-2 border-red-500"
                  }`}>
                    <div className="flex items-start gap-4">
                      {score.percentage >= 70 ? (
                        <Trophy className="w-8 h-8 text-green-600 flex-shrink-0" />
                      ) : (
                        <XCircle className="w-8 h-8 text-red-600 flex-shrink-0" />
                      )}
                      <div>
                        <h4 className={`mb-2 ${
                          score.percentage >= 70 ? "text-green-900" : "text-red-900"
                        }`} style={{ fontSize: "1.25rem", fontWeight: 700 }}>
                          {score.percentage >= 70 ? "Excellent! You Passed!" : "Keep Practicing!"}
                        </h4>
                        <p className={score.percentage >= 70 ? "text-green-800" : "text-red-800"}>
                          {score.percentage >= 70 
                            ? "You're ready for the IC38 exam! Keep up the great work."
                            : "You need 70% to pass. Review the explanations and try again."}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tips Tab */}
          <TabsContent value="tips">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <Card className="border-0 shadow-lg h-full">
                  <CardHeader>
                    <CardTitle className="text-[#0A2540] flex items-center gap-2">
                      <CheckCircle2 className="w-6 h-6 text-green-600" />
                      Preparation Tips
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      "Study consistently for 2-3 hours daily for 2 weeks",
                      "Focus on understanding concepts, not just memorizing",
                      "Take regular practice tests to assess your progress",
                      "Join our study group for peer learning and support",
                      "Review IRDA regulations and ethics thoroughly",
                      "Make notes of important points for quick revision",
                    ].map((tip, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle2 className="w-4 h-4 text-green-600" />
                        </div>
                        <p className="text-gray-700">{tip}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <Card className="border-0 shadow-lg h-full">
                  <CardHeader>
                    <CardTitle className="text-[#0A2540] flex items-center gap-2">
                      <Trophy className="w-6 h-6 text-[#D4AF37]" />
                      Exam Day Tips
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      "Arrive at the exam center 30 minutes early",
                      "Carry valid ID proof and admit card",
                      "Read each question carefully before answering",
                      "Manage your time - 1 minute per question",
                      "Don't spend too much time on difficult questions",
                      "Review your answers before final submission",
                    ].map((tip, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-[#D4AF37]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                        </div>
                        <p className="text-gray-700">{tip}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Success Stories */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 bg-gradient-to-br from-[#0A2540] to-[#1a3a5c] rounded-2xl p-8 text-white"
            >
              <h3 className="text-center mb-8" style={{ fontSize: "1.75rem", fontWeight: 700 }}>
                Join 100+ Successful Candidates
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-[#D4AF37] mb-2" style={{ fontSize: "2.5rem", fontWeight: 700 }}>
                    95%
                  </div>
                  <p className="text-gray-200">Pass Rate with Our Materials</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-[#D4AF37] mb-2" style={{ fontSize: "2.5rem", fontWeight: 700 }}>
                    2 Weeks
                  </div>
                  <p className="text-gray-200">Average Preparation Time</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-[#D4AF37] mb-2" style={{ fontSize: "2.5rem", fontWeight: 700 }}>
                    500+
                  </div>
                  <p className="text-gray-200">Practice Questions Available</p>
                </div>
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="border-0 shadow-xl bg-gradient-to-r from-gray-50 to-white">
            <CardContent className="p-8">
              <h3 className="text-[#0A2540] mb-4" style={{ fontSize: "1.75rem", fontWeight: 700 }}>
                Ready to Start Your Preparation?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Get personalized guidance, study materials, and mentorship to ace your IC38 exam
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-[#0A2540] hover:bg-[#0A2540]/90"
                  asChild
                >
                  <a href="#contact">Enroll in Preparation Course</a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#0A2540] text-[#0A2540] hover:bg-[#0A2540] hover:text-white"
                >
                  Download Free Study Guide
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
