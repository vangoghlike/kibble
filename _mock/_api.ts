import { MockRequest } from '@delon/mock';

// region: mock data

const titles = [
  'Happy',
  'Kibble',
  'Yerin',
  'Narae',
  'Aoreum',
  'Jinwoo',
  'Basketman',
  'Human',
];

const avatars = [
  'https://instagram.fbey5-1.fna.fbcdn.net/vp/6bd6dcedfc8fa9ef41646b53d8811c0e/5BBBE67A/t51.2885-19/11906329_960233084022564_1448528159_a.jpg', // Happy
  'https://instagram.fbey5-1.fna.fbcdn.net/vp/6bd6dcedfc8fa9ef41646b53d8811c0e/5BBBE67A/t51.2885-19/11906329_960233084022564_1448528159_a.jpg', // Kibble
  'https://instagram.fbey5-1.fna.fbcdn.net/vp/6bd6dcedfc8fa9ef41646b53d8811c0e/5BBBE67A/t51.2885-19/11906329_960233084022564_1448528159_a.jpg', // Yerin
  'https://instagram.fbey5-1.fna.fbcdn.net/vp/6bd6dcedfc8fa9ef41646b53d8811c0e/5BBBE67A/t51.2885-19/11906329_960233084022564_1448528159_a.jpg', // Narae
  'https://instagram.fbey5-1.fna.fbcdn.net/vp/6bd6dcedfc8fa9ef41646b53d8811c0e/5BBBE67A/t51.2885-19/11906329_960233084022564_1448528159_a.jpg', // Aoreum
  'https://scontent-icn1-1.cdninstagram.com/vp/f04bb368040f94cb9e2dfba583099c0c/5B9DFDBB/t51.2885-19/s150x150/23969468_873922476118605_8092578027663261696_n.jpg', // jinwoo
  'https://instagram.fbey5-1.fna.fbcdn.net/vp/6bd6dcedfc8fa9ef41646b53d8811c0e/5BBBE67A/t51.2885-19/11906329_960233084022564_1448528159_a.jpg', // Basketman
  'https://instagram.fbey5-1.fna.fbcdn.net/vp/6bd6dcedfc8fa9ef41646b53d8811c0e/5BBBE67A/t51.2885-19/11906329_960233084022564_1448528159_a.jpg', // Human
];
const covers = [
  './assets/tmp/img/klist_bg-1.jpg',
  './assets/tmp/img/klist_bg-2.jpg',
  './assets/tmp/img/klist_bg-3.jpg',
  './assets/tmp/img/klist_bg-4.jpg',
];
const desc = [
  '那是一种内在的东西， 他们到达不了，也无法触及的',
  '希望是一个好东西，也许是最好的，好东西是不会消亡的',
  '生命就像一盒巧克力，结果往往出人意料',
  '城镇中有那么多的酒馆，她却偏偏走进了我的酒馆',
  '那时候我只会想自己想要什么，从不想自己拥有什么',
];

const user = [
  '卡色',
  'cipchk',
  '付小小',
  '曲丽丽',
  '林东东',
  '周星星',
  '吴加好',
  '朱偏右',
  '鱼酱',
  '乐哥',
  '谭小仪',
  '仲尼',
];

// endregion

function getFakeList(count: number = 20): any[] {
  const list = [];
  for (let i = 0; i < count; i += 1) {
    list.push({
      id: `fake-list-${i}`,
      owner: user[i % 10],
      title: titles[i % 8],
      avatar: avatars[i % 8],
      cover:
        parseInt((i / 4).toString(), 10) % 2 === 0
          ? covers[i % 4]
          : covers[3 - i % 4],
      status: ['active', 'exception', 'normal'][i % 3],
      percent: Math.ceil(Math.random() * 50) + 50,
      logo: avatars[i % 8],
      href: 'https://ant.design',
      updatedAt: new Date(new Date().getTime() - 1000 * 60 * 60 * 2 * i),
      createdAt: new Date(new Date().getTime() - 1000 * 60 * 60 * 2 * i),
      subDescription: desc[i % 5],
      description:
        '수백 번 성공한적 없는 고백, 자신감이 없는 Should I just go back, 반드시 고백한다. 말만 하면 뭐해 In the end. 널 더 보고싶었던 것은 욕심, 지금 나에겐 한심',
      activeUser: Math.ceil(Math.random() * 100000) + 100000,
      newUser: Math.ceil(Math.random() * 1000) + 1000,
      star: Math.ceil(Math.random() * 100) + 100,
      like: Math.ceil(Math.random() * 100) + 100,
      message: Math.ceil(Math.random() * 10) + 10,
      content:
        '段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。',
      members: [
        {
          avatar:
            'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png',
          name: '曲丽丽',
        },
        {
          avatar:
            'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png',
          name: '王昭君',
        },
        {
          avatar:
            'https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png',
          name: '董娜娜',
        },
      ],
    });
  }

  return list;
}

function getNotice(): any[] {
  return [
    {
      id: 'xxx1',
      title: titles[0],
      logo: avatars[0],
      description: '那是一种内在的东西， 他们到达不了，也无法触及的',
      updatedAt: new Date(),
      member: '科学搬砖组',
      href: '',
      memberLink: '',
    },
    {
      id: 'xxx2',
      title: titles[1],
      logo: avatars[1],
      description: '希望是一个好东西，也许是最好的，好东西是不会消亡的',
      updatedAt: new Date('2017-07-24'),
      member: '全组都是吴彦祖',
      href: '',
      memberLink: '',
    },
    {
      id: 'xxx3',
      title: titles[2],
      logo: avatars[2],
      description: '城镇中有那么多的酒馆，她却偏偏走进了我的酒馆',
      updatedAt: new Date(),
      member: '中二少女团',
      href: '',
      memberLink: '',
    },
    {
      id: 'xxx4',
      title: titles[3],
      logo: avatars[3],
      description: '那时候我只会想自己想要什么，从不想自己拥有什么',
      updatedAt: new Date('2017-07-23'),
      member: '程序员日常',
      href: '',
      memberLink: '',
    },
    {
      id: 'xxx5',
      title: titles[4],
      logo: avatars[4],
      description: '凛冬将至',
      updatedAt: new Date('2017-07-23'),
      member: '高逼格设计天团',
      href: '',
      memberLink: '',
    },
    {
      id: 'xxx6',
      title: titles[5],
      logo: avatars[5],
      description: '生命就像一盒巧克力，结果往往出人意料',
      updatedAt: new Date('2017-07-23'),
      member: '骗你来学计算机',
      href: '',
      memberLink: '',
    },
  ];
}

function getActivities(): any[] {
  return [
    {
      id: 'trend-1',
      updatedAt: new Date(),
      user: {
        name: '林东东',
        avatar: avatars[0],
      },
      group: {
        name: '高逼格设计天团',
        link: 'http://github.com/',
      },
      project: {
        name: '六月迭代',
        link: 'http://github.com/',
      },
      template: '在 @{group} 新建项目 @{project}',
    },
    {
      id: 'trend-2',
      updatedAt: new Date(),
      user: {
        name: '付小小',
        avatar: avatars[1],
      },
      group: {
        name: '高逼格设计天团',
        link: 'http://github.com/',
      },
      project: {
        name: '六月迭代',
        link: 'http://github.com/',
      },
      template: '在 @{group} 新建项目 @{project}',
    },
    {
      id: 'trend-3',
      updatedAt: new Date(),
      user: {
        name: '曲丽丽',
        avatar: avatars[2],
      },
      group: {
        name: '中二少女团',
        link: 'http://github.com/',
      },
      project: {
        name: '六月迭代',
        link: 'http://github.com/',
      },
      template: '在 @{group} 新建项目 @{project}',
    },
    {
      id: 'trend-4',
      updatedAt: new Date(),
      user: {
        name: '周星星',
        avatar: avatars[3],
      },
      project: {
        name: '5 月日常迭代',
        link: 'http://github.com/',
      },
      template: '将 @{project} 更新至已发布状态',
    },
    {
      id: 'trend-5',
      updatedAt: new Date(),
      user: {
        name: '朱偏右',
        avatar: avatars[4],
      },
      project: {
        name: '工程效能',
        link: 'http://github.com/',
      },
      comment: {
        name: '留言',
        link: 'http://github.com/',
      },
      template: '在 @{project} 发布了 @{comment}',
    },
    {
      id: 'trend-6',
      updatedAt: new Date(),
      user: {
        name: '乐哥',
        avatar: avatars[5],
      },
      group: {
        name: '程序员日常',
        link: 'http://github.com/',
      },
      project: {
        name: '品牌迭代',
        link: 'http://github.com/',
      },
      template: '在 @{group} 新建项目 @{project}',
    },
  ];
}

export const APIS = {
  '/api/list': (req: MockRequest) => getFakeList(req.queryString.count),
  '/api/notice': () => getNotice(),
  '/api/activities': () => getActivities(),
};
