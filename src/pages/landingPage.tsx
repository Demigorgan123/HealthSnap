import Navbar from "@/components/Navbar";
import Link from "next/link";
export default function LandingPage() {
    return (
        <>
            <Navbar />
            <main className="pt-16">
                <div className="min-h-screen bg-gradient-to-br from-[#f5f9ff] to-[#e8f0fe] text-gray-800 font-sans">
                    {/* Hero Section */}
                    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-16 gap-10">
                        <div className="flex-1 text-center md:text-left">
                            <h1 className="text-4xl md:text-6xl font-bold mb-6">
                                Welcome to <span className="text-blue-600">HealthSnap</span>
                            </h1>
                            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
                                Track your health, check symptoms instantly, and get smart wellness suggestions—all in one app.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                <Link href="/auth/signup" className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
                                    Get Started
                                </Link>
                                <button className="px-6 py-3 border border-blue-600 text-blue-600 rounded-xl hover:bg-blue-100 transition">
                                    Learn More
                                </button>
                            </div>
                        </div>
                        <div className="flex-1">
                            <img
                                src="/health-hero-illustration.svg"
                                alt="Health Monitoring"
                                className="w-full max-w-md mx-auto"
                            />
                        </div>
                    </section>

                    {/* Features */}
                    <section id="features" className="py-12 px-6 md:px-16 bg-white text-center scroll-mt-28">
                        <h2 className="text-3xl md:text-4xl font-bold mb-10">Why Use HealthSnap?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                            <div className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
                                <h3 className="text-xl font-semibold mb-2 text-blue-600">AI Symptom Checker</h3>
                                <p className="text-gray-600">Get possible health conditions instantly with urgency levels and suggestions.</p>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
                                <h3 className="text-xl font-semibold mb-2 text-blue-600">Health Logs</h3>
                                <p className="text-gray-600">Log your mood, sleep, vitals, and habits to discover trends and insights.</p>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
                                <h3 className="text-xl font-semibold mb-2 text-blue-600">Smart Recommendations</h3>
                                <p className="text-gray-600">AI suggests personalized lifestyle changes to improve your health.</p>
                            </div>
                        </div>
                    </section>

                    {/* How It Works */}
                    <section id="how-it-works" className="py-16 px-6 md:px-16 bg-gradient-to-br from-blue-50 to-blue-100 text-center scroll-mt-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-10">How It Works</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="p-6">
                                <div className="text-5xl text-blue-600 mb-4">📝</div>
                                <h3 className="font-semibold text-xl mb-2">Enter Symptoms</h3>
                                <p className="text-gray-700">Quickly type what you’re feeling. The AI analyzes it in seconds.</p>
                            </div>
                            <div className="p-6">
                                <div className="text-5xl text-blue-600 mb-4">📊</div>
                                <h3 className="font-semibold text-xl mb-2">Track Health</h3>
                                <p className="text-gray-700">Record sleep, steps, heart rate, and more to track your progress.</p>
                            </div>
                            <div className="p-6">
                                <div className="text-5xl text-blue-600 mb-4">🤖</div>
                                <h3 className="font-semibold text-xl mb-2">Get Suggestions</h3>
                                <p className="text-gray-700">Receive tailored suggestions to enhance your health and wellbeing.</p>
                            </div>
                        </div>
                    </section>

                    {/* Footer */}
                    <footer id="contact" className="py-6 bg-white text-center border-t">
                        <p className="text-sm text-gray-500">
                            © {new Date().getFullYear()} HealthSnap. All rights reserved.
                        </p>
                    </footer>
                </div>
            </main>
        </>
    );
}
