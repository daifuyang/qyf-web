import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <div className="min-h-screen bg-white">
      {/* 导航栏 */}
      <header className={`fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 transition-all duration-300 ${scrolled ? "nav-scrolled" : ""}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg"></div>
              <span className="text-xl font-semibold text-gray-900">全益服</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">功能</a>
              <a href="#solutions" className="text-gray-600 hover:text-gray-900 transition-colors">解决方案</a>
              <a href="#download" className="text-gray-600 hover:text-gray-900 transition-colors">APP下载</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">价格</a>
              <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">关于</a>
            </nav>
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-gray-900 transition-colors">登录</button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors btn-primary">
                免费试用
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero 区域 */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="hero-title text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            环保企业
            <span className="text-blue-600"> 专属CRM</span>
            <br />
            管理系统
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            全益服为环保企业提供全方位的客户关系管理解决方案，涵盖客户管理、合同管理、
            订单管理、工单管理、供应链管理等核心业务流程，助力企业数字化转型。
          </p>
          <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium btn-primary">
              立即体验
            </button>
            <button className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-lg font-medium">
              预约演示
            </button>
          </div>
        </div>
      </section>

      {/* 功能展示区域 */}
      <section id="features" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">全方位业务管理</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              从客户接触到售后服务，全益服为您提供环保行业全链路数字化解决方案
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 客户管理 */}
            <div className="feature-card bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-blue-600 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">客户管理</h3>
              <p className="text-gray-600 leading-relaxed">
                统一管理客户信息，建立完整客户档案，支持客户分级、标签管理，帮助企业精准把握客户需求。
              </p>
            </div>

            {/* 合同管理 */}
            <div className="feature-card bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-green-600 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">合同管理</h3>
              <p className="text-gray-600 leading-relaxed">
                支持电子合同签订、合同模板管理、履约跟踪，确保合同全生命周期数字化管理。
              </p>
            </div>

            {/* 订单管理 */}
            <div className="feature-card bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-purple-600 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">订单管理</h3>
              <p className="text-gray-600 leading-relaxed">
                订单全流程跟踪，支持在线支付、订单状态实时更新，提升订单处理效率。
              </p>
            </div>

            {/* 工单管理 */}
            <div className="feature-card bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-orange-600 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">工单管理</h3>
              <p className="text-gray-600 leading-relaxed">
                智能化工单分配与跟踪，支持工单模板、自动派单、服务评价，提升服务质量。
              </p>
            </div>

            {/* 供应链管理 */}
            <div className="feature-card bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-red-600 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">供应链管理</h3>
              <p className="text-gray-600 leading-relaxed">
                供应商信息管理、采购流程优化、库存实时监控，构建高效供应链体系。
              </p>
            </div>

            {/* 电子发票 */}
            <div className="feature-card bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-indigo-600 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">电子发票</h3>
              <p className="text-gray-600 leading-relaxed">
                支持电子发票开具、管理、查验，简化财务流程，提高开票效率。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 产品特性区域 */}
      <section id="solutions" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">为环保企业量身定制</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              深度理解环保行业特点，提供符合行业需求的专属功能
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">环保合规管理</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                内置环保法规库，自动更新最新政策要求，帮助企业合规经营，降低法律风险。
                支持环保数据统计、报表生成，满足监管要求。
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-5 h-5 bg-green-500 rounded-full mr-3 mt-0.5 flex-shrink-0"></div>
                  <span className="text-gray-700">环保法规实时更新</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 bg-green-500 rounded-full mr-3 mt-0.5 flex-shrink-0"></div>
                  <span className="text-gray-700">合规性自动检查</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 bg-green-500 rounded-full mr-3 mt-0.5 flex-shrink-0"></div>
                  <span className="text-gray-700">环保数据报表生成</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-100 rounded-xl h-80 flex items-center justify-center">
              <div className="text-gray-400">环保合规管理界面预览</div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-100 rounded-xl h-80 flex items-center justify-center order-2 md:order-1">
              <div className="text-gray-400">数据分析界面预览</div>
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">智能数据分析</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                基于大数据和AI技术，提供环保行业专属数据分析模型，帮助企业洞察业务趋势，
                优化决策流程，提升运营效率。
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-5 h-5 bg-blue-500 rounded-full mr-3 mt-0.5 flex-shrink-0"></div>
                  <span className="text-gray-700">环保效果分析</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 bg-blue-500 rounded-full mr-3 mt-0.5 flex-shrink-0"></div>
                  <span className="text-gray-700">客户行为预测</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 bg-blue-500 rounded-full mr-3 mt-0.5 flex-shrink-0"></div>
                  <span className="text-gray-700">资源优化建议</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* APP下载区域 */}
      <section id="download" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">随时随地，高效管理</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              下载全益服移动应用，让业务管理更加便捷，实时掌握企业动态
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">移动办公，业务不中断</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <div className="w-5 h-5 bg-blue-600 rounded-sm"></div>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-1">实时数据同步</h4>
                    <p className="text-gray-600">多端数据实时同步，确保信息一致性</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <div className="w-5 h-5 bg-green-600 rounded-sm"></div>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-1">离线工作模式</h4>
                    <p className="text-gray-600">无网络环境下仍可正常工作，联网后自动同步</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <div className="w-5 h-5 bg-purple-600 rounded-sm"></div>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-1">消息推送</h4>
                    <p className="text-gray-600">重要业务事件实时推送，不错过任何商机</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#" className="inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  App Store 下载
                </a>
                <a href="#" className="inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  Google Play 下载
                </a>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 bg-gradient-to-br from-blue-500 to-green-500 rounded-3xl shadow-xl flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                      <div className="w-8 h-8 bg-white rounded"></div>
                    </div>
                    <p className="text-xl font-medium">全益服</p>
                    <p className="text-sm opacity-80">移动应用</p>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                  <div className="text-blue-600 font-bold">4.9</div>
                </div>
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                  <div className="text-green-600 font-bold">10K+</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">扫码下载</h3>
            <p className="text-gray-600 mb-8">使用手机扫描二维码，立即下载全益服移动应用</p>
            <div className="flex justify-center space-x-8">
              <div className="text-center">
                <div className="w-32 h-32 bg-white p-4 rounded-lg shadow-md mb-3">
                  <div className="w-full h-full bg-gray-200 rounded flex items-center justify-center">
                    <span className="text-gray-500">iOS QR</span>
                  </div>
                </div>
                <p className="text-gray-600">iOS版本</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 bg-white p-4 rounded-lg shadow-md mb-3">
                  <div className="w-full h-full bg-gray-200 rounded flex items-center justify-center">
                    <span className="text-gray-500">Android QR</span>
                  </div>
                </div>
                <p className="text-gray-600">Android版本</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 区域 */}
      <section className="py-20 px-6 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            开始您的数字化转型之旅
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            立即体验全益服，开启环保企业数字化管理新时代
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-50 transition-colors text-lg font-medium btn-primary">
              免费试用
            </button>
            <button className="px-8 py-3 border border-white text-white rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium">
              预约演示
            </button>
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer id="about" className="py-12 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg"></div>
                <span className="text-xl font-semibold text-white">全益服</span>
              </div>
              <p className="text-gray-400">
                环保企业专属CRM管理系统，助力企业数字化转型
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">产品</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">功能介绍</a></li>
                <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors">价格方案</a></li>
                <li><a href="#cases" className="text-gray-400 hover:text-white transition-colors">客户案例</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">支持</h4>
              <ul className="space-y-2">
                <li><a href="#help" className="text-gray-400 hover:text-white transition-colors">帮助中心</a></li>
                <li><a href="#api" className="text-gray-400 hover:text-white transition-colors">API文档</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">联系我们</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">公司</h4>
              <ul className="space-y-2">
                <li><a href="#about-us" className="text-gray-400 hover:text-white transition-colors">关于我们</a></li>
                <li><a href="#careers" className="text-gray-400 hover:text-white transition-colors">加入我们</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 全益服. 保留所有权利.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
