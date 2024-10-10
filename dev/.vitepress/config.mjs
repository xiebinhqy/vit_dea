import { defineConfig } from 'vitepress'
import { set_sidebar } from "./utils/auto_sidebar.mjs";	// 改成自己的路径
import { componentPreview, containerPreview } from '@vitepress-demo-preview/plugin'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "一武智能辅助文档",
  description: "A VitePress Site",
  lang: 'cn-ZH',
  head: [["link", { rel: "icon", href: "/vit_dea/logo.png" }]],
  outDir: "../docs", //build输出路径
  base: "/vit_dea/", //github-路径
  lastUpdated: true, //更新时间显示

  //组件引入
  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark'
    },
    lineNumbers: true,
    config(md) {
      md.use(componentPreview)
      md.use(containerPreview)
    }
  },
  themeConfig: {
    outlineTitle:"目录",
    outline:[2,6],
    logo:'/logo.png',
    siteTitle:'官方文档',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {text: "首页",link: '/'},
      {text: "指南",link: '/guide/'},
      {text: "组件",link: '/components/basic-component1'},
      {
        text:'Dropdown Menu',
        items: [
          { text: 'Item A', link: '/item-1' },
          { text: 'Item b', link: '/item-2' },
          { text: 'Item c', link: '/item-3' },
        ]
      },
    ],


    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' },
    //     ],
    //   },
    //   {
    //     text: 'test2',
    //     items: [
    //       { text: 'Markdown 2', link: '/markdown-examples' },
    //       { text: 'Runtime API 2', link: '/api-examples' },
    //     ],
    //   },
    //   {
    //     text: 'test2',
    //     items: [
    //       { text: 'ront-end', link: '/front-end/react' },
    //       { text: 'backend', link: '/backend/index' },
    //       { text: 'backend', link: '/backend/index' },
    //     ],
    //   },
    // ],
    // sidebar: {
    //   //自动生成侧边栏-基于顶部导航
    //   "/front-end/react": set_sidebar("/front-end/react"),
    //   "/backend/rabbitmq": set_sidebar("/backend/rabbitmq"),
    //   //左侧手动增加侧边栏
    //   text: '"Examples',
    //   items:[
    //     {text: 'Markdown示例',link: '/markdown-examples'},
    //     { text: 'Runtime API Examples', link: '/api-examples' },
    //   ],
    // },

    sidebar:{
      '/guide': [
        {
          text:'指南',
          items:[
            {text:'组件库介绍',link: '/guide/'},
            {text:'快速开始',link: '/guide/quickstart'},
            {text:'快速部署',link: '/guide/home-work'},
          ]
        }
      ],
      '/components': [
        {
          text: '通用基础组件',
          collapsed: false,
          items: [
            {text:'基础组件 1',link: '/components/basic-component1'},
            {text:'基础组件 2',link: '/components/basic-component2'},
          ]
        },
        {
          text: '通用业务组件',
          collapsed: true,
          items: [
            {text:'通用组件 1',link: '/components/common-component1'},
            {text:'通用组件 2',link: '/components/common-component2'},
          ]
        },
        {
          text: '高级业务组件',
          collapsed: true,
          items: [
            {text:'高级组件 1',link: '/components/pro-component1'},
            {text:'高级组件 2',link: '/components/pro-component2'},
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
    //底部配置
    footer: {
      message: 'Released under the MIT License.',
      copyright:'Copyright © 2019-present Evan You',
    },
    // 设置搜索框的样式
    search: {
        provider: "local",
        options: {
          translations: {
            button: {
              buttonText: "搜索文档",
              buttonAriaLabel: "搜索文档",
            },
            modal: {
              noResultsText: "无法找到相关结果",
              resetButtonTitle: "清除查询条件",
              footer: {
                selectText: "选择",
                navigateText: "切换",
              },
            },
          },
        },
      },
  },
})
