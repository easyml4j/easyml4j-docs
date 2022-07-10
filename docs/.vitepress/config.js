import mathjax3 from "markdown-it-mathjax3";

const customElements = ["mjx-container"];
export default {
  markdown: {
    config: (md) => {
      md.use(mathjax3);
    }
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => customElements.includes(tag)
      }
    }
  },
  title: "VitePress",
  lang: "en-US",
  description: "Vite & Vue powered static site generator.",
  head: [
    ["script", { src: "https://polyfill.io/v3/polyfill.min.js?features=es6" }],
    ["script", { src: "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js" }]
  ],

  // Theme related configurations.
  themeConfig: {
    logo: "/logo.svg",
    siteTitle: "Easy ml for Java",
    // 导航栏是显示在页面顶部的导航栏。它包含站点标题、全局菜单链接等
    nav: [
      { text: "Guide", link: "/guide" },
      {
        text: "Dropdown Menu",
        items: [
          { text: "Item A", link: "/item-1" },
          { text: "Item B", link: "/item-2" },
          { text: "Item C", link: "/item-3" }
        ]
      }
    ],
    // 侧栏是文档的主要导航块。您可以在themeConfig.sidebar中配置sidebar
    sidebar: [
      {
        text: "前言",
        // 折叠目录
        collapsible: true,
        items: [
          { text: "简介", link: "/index" },
          { text: "快速入门", link: "/getting-started" }
        ]
      },
      {
        text: "线性模型",
        collapsible: true,
        items: [
          { text: "普通最小二乘法", link: "/ml/线性模型/普通最小二乘法" },
          { text: "岭回归", link: "/ml/线性模型/岭回归" },
          { text: "Lasso回归", link: "/ml/线性模型/Lasso回归" },
          { text: "正交匹配追踪", link: "/ml/线性模型/正交匹配追踪" },
          { text: "贝叶斯回归", link: "/ml/线性模型/贝叶斯回归" },
          { text: "逻辑回归", link: "/ml/线性模型/逻辑回归" },
          { text: "广义线性回归", link: "/ml/线性模型/广义线性回归" },
          { text: "随机梯度下降", link: "/ml/线性模型/随机梯度下降" },
          { text: "感知器", link: "/ml/线性模型/感知器" },
          { text: "被动攻击算法", link: "/ml/线性模型/被动攻击算法" },
          { text: "鲁棒性回归", link: "/ml/线性模型/鲁棒性回归" },
          { text: "分位数回归", link: "/ml/线性模型/分位数回归" },
          { text: "多项式回归", link: "/ml/线性模型/多项式回归" }
        ]
      },
      {
        text: "贝叶斯",
        collapsible: true,
        items: [{ text: "朴素贝叶斯", link: "/ml/贝叶斯/朴素贝叶斯" }]
      },
      {
        text: "支持向量机",
        collapsible: true,
        items: [
          { text: "分类", link: "/ml/支持向量机/分类" },
          { text: "回归", link: "/ml/支持向量机/回归" },
          { text: "密度估计", link: "/ml/支持向量机/密度估计" },
          { text: "异常检测", link: "/ml/支持向量机/异常检测" }
        ]
      },
      {
        text: "树模型",
        collapsible: true,
        items: [
          { text: "决策树", link: "/ml/树模型/决策树" },
          { text: "梯度提升树", link: "/ml/树模型/梯度提升树" },
          { text: "最近邻", link: "/ml/树模型/最近邻" }
        ]
      },
      {
        text: "集成模型",
        collapsible: true,
        items: [
          { text: "随机森林", link: "/ml/集成模型/随机森林" },
          { text: "Adaboost", link: "/ml/集成模型/Adaboost" }
        ]
      },
      {
        text: "聚类",
        collapsible: true,
        items: [
          { text: "KMeans聚类", link: "/ml/聚类/KMeans聚类" },
          { text: "均值漂移", link: "/ml/聚类/均值漂移" },
          { text: "层次聚类", link: "/ml/聚类/层次聚类" },
          { text: "Affinity Propagation", link: "/ml/聚类/AffinityPropagation" },
          { text: "谱聚类", link: "/ml/聚类/谱聚类" },
          { text: "OPTICS", link: "/ml/聚类/OPTICS" },
          { text: "DBSCAN", link: "/ml/聚类/DBSCAN" },
          { text: "BIRCH", link: "/ml/聚类/BIRCH" }
        ]
      },
      {
        text: "模型选择与评估",
        collapsible: true,
        items: [
          { text: "模型选择", link: "/ml/模型选择与评估/模型选择" },
          { text: "回归指标", link: "/ml/模型选择与评估/回归" },
          { text: "分类指标", link: "/ml/模型选择与评估/分类" },
          { text: "聚类指标", link: "/ml/模型选择与评估/聚类" }
        ]
      },
      {
        text: "特征处理",
        collapsible: true,
        items: [
          { text: "缺失值处理", link: "/ml/特征处理/缺失值处理" },
          { text: "异常值处理", link: "/ml/特征处理/异常值处理" },
          { text: "特征选择", link: "/ml/特征处理/特征选择" },
          { text: "特征转换", link: "/ml/特征处理/特征转换" }
        ]
      }
    ]
  }
};
