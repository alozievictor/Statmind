import React from 'react';
import { Zap, BarChart3, Bot, Shield, ArrowRight, Download, TrendingUp, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const features = [
    {
      icon: <Bot className="w-6 h-6 text-brand-accent" />,
      title: "Prop AI Assistant",
      description: "Our intelligent AI analyzes thousands of data points to give you the edge on player props."
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-brand-accent" />,
      title: "Advanced Statistics",
      description: "Deep historical data and trends visualized with high-fidelity charts and comparisons."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-brand-accent" />,
      title: "Prediction Engine",
      description: "Mathematically backed predictions for upcoming games and parlays that make sense."
    },
    {
      icon: <Cpu className="w-6 h-6 text-brand-accent" />,
      title: "Evaluation Tool",
      description: "Real-time probability processing to determine the statistical likelihood of any bet hitting."
    }
  ];

  const screenshots = [
    {
      id: 1,
      title: "Today's Best Predictions",
      image: "app_home.png",
      description: "Get the highest probability picks curated by our data engine."
    },
    {
      id: 2,
      title: "Deep Player Analysis",
      image: "app_player.png",
      description: "Historical hit rates and consistency charts for every prop."
    },
    {
      id: 3,
      title: "Discover Value",
      image: "app_discover.png",
      description: "Search across leagues and find the best ratings (A+ to F)."
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-20 md:pt-32 md:pb-40 px-4">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-full -z-10 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-brand-accent rounded-full blur-[120px]" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-purple rounded-full blur-[150px]" />
        </div>

        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8 animate-pulse">
            <Zap size={16} className="text-brand-accent fill-brand-accent" />
            <span className="text-sm font-semibold tracking-wide text-brand-accent underline underline-offset-4 decoration-brand-accent/30">v2.0 NOW LIVE</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight">
            The Bloomberg for <br />
            <span className="text-gradient">Sports Bettors</span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Statmind bridges the gap between raw data and actionable insights. Use AI-powered intelligence to dominate player props and game predictions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-brand-accent hover:bg-brand-accent/90 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all hover:scale-105 shadow-xl shadow-brand-accent/25 flex items-center justify-center gap-2">
              <Download size={20} />
              Get Started Free
            </button>
            <Link to="/contact" className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white border border-white/10 px-10 py-4 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-2">
              View Features
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* App Showcase */}
      <section className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Inside the <span className="text-brand-accent">Mind</span></h2>
            <p className="text-gray-400">Experience a premium dark-themed interface designed for high-performance analysis.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {screenshots.map((shot, idx) => (
              <div key={shot.id} className="group relative">
                <div className="absolute -inset-1 bg-linear-to-b from-brand-accent/20 to-transparent rounded-4xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-[#080a1a] border border-white/10 rounded-4xl overflow-hidden">
                  <div className="p-2">
                    <img 
                      src={`/${shot.image}`} 
                      alt={shot.title} 
                      className="rounded-3xl w-full h-auto transform group-hover:scale-[1.02] transition-transform duration-500 shadow-2xl"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{shot.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{shot.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">
                Data-Driven <br />
                <span className="text-brand-accent">Dominance.</span>
              </h2>
              <div className="space-y-8">
                {features.map((f, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="shrink-0 w-12 h-12 rounded-2xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center">
                      {f.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{f.title}</h4>
                      <p className="text-gray-400 max-w-md">{f.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-brand-accent/10 rounded-[3rem] blur-3xl" />
              <div className="relative bg-white/5 border border-white/10 p-4 md:p-8 rounded-[3rem] backdrop-blur-sm">
                 <div className="flex items-center justify-between mb-8">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/50" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                      <div className="w-3 h-3 rounded-full bg-green-500/50" />
                    </div>
                    <div className="px-3 py-1 bg-white/10 rounded-full text-[10px] font-mono text-gray-400 tracking-wider">
                      STATMIND.TERMINAL.CORE
                    </div>
                 </div>
                 <div className="space-y-6 font-mono">
                    <div className="flex gap-4 p-4 rounded-xl bg-brand-accent/10 border border-brand-accent/20">
                      <Bot size={20} className="text-brand-accent" />
                      <p className="text-sm text-brand-accent">"Suggesting LeBron James O24.5 PTS. Statistical HIT probability: 68.4% based on last 5 games vs Celtics."</p>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-brand-accent w-[68%]" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                       <div className="p-4 rounded-xl border border-white/5 bg-white/5">
                          <p className="text-[10px] text-gray-500 mb-1 uppercase">Avg Pts</p>
                          <p className="text-xl font-bold">26.8</p>
                       </div>
                       <div className="p-4 rounded-xl border border-white/5 bg-white/5">
                          <p className="text-[10px] text-gray-500 mb-1 uppercase">Consistency</p>
                          <p className="text-xl font-bold">82%</p>
                       </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto bg-linear-to-r from-brand-accent to-brand-purple rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-brand-accent/40">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/20 rounded-full blur-[100px]" />
          
          <h2 className="text-4xl md:text-6xl font-black mb-8 relative z-10">Ready to <span className="underline decoration-white/30">Win</span>?</h2>
          <p className="text-white/80 text-lg md:text-xl mb-12 max-w-xl mx-auto relative z-10">
            Join thousands of successful bettors who use Statmind to find an edge. Download the app today and get your first week of premium insights on us.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <button className="w-full sm:w-auto bg-white text-brand-bg px-12 py-5 rounded-2xl font-black text-xl hover:scale-105 transition-transform active:scale-95 shadow-xl">
              Download for iOS
            </button>
            <button className="w-full sm:w-auto bg-brand-bg text-white px-12 py-5 rounded-2xl font-black text-xl hover:scale-105 transition-transform active:scale-95 shadow-xl">
              Download for Android
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
