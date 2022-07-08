export default {
  title: "VitePress",
  lang: "en-US",
  description: "Vite & Vue powered static site generator.",

  // Theme related configurations.
  themeConfig: {
    logo: "/logo.svg",
    siteTitle: "Hello World",
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
        items: [
          { text: "简介", link: "/index" },
          { text: "快速入门", link: "/快速入门" }
        ]
      },
      {
        text: "线性模型",
        items: [
          { text: "普通最小二乘法", link: "/index" },
          { text: "岭回归", link: "/快速入门" }
        ]
      },
      {
        text: "树模型",
        items: [
          { text: "决策树", link: "/index" },
          { text: "梯度提升树", link: "/快速入门" }
        ]
      },
      {
        text: "集成模型",
        items: [
          { text: "普通最小二乘法", link: "/index" },
          { text: "岭回归", link: "/快速入门" }
        ]
      }
    ]
  }
};
