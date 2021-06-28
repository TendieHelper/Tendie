import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://www.tendieswap.org/#/',
  },
  {
    label: ('Stats'),
    icon: 'InfoIcon',
    href: 'https://www.tendieswap.org/#/stats',
    status: {
      text: 'NEW',
      color: 'success',
    }
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    status: {
      text: 'MIGRATE',
      color: 'warning',
    },
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://www.tendieswap.org/#/farms',
  },
  {
    label: 'Buckets',
    icon: 'PoolIcon',
    href: 'https://www.tendieswap.org/#/pools',
  },
  {
    label: ('Prediction (BETA)'),
    icon: 'PredictionsIcon',
    items: [
      {
        label: 'BNBUSDT',
        href: '/bnbprediction',
      },
      /*
      {
        label: 'BTCUSDT',
        href: '/btcprediction',
      },
      {
        label: 'ETHUSDT',
        href: '/ethprediction',
      },
      {
        label: 'DOGEUSDT',
        href: '/dogeprediction'
      },
      */  
    ]
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/tendieswap',
      },
      {
        label: 'Docs',
        href: 'https://coloneltendie.gitbook.io/tendieswap',
      },
      {
        label: 'Blog',
        href: 'https://tendieswap.medium.com',
      },
      {
        label: 'Roadmap',
        href: '/roadmap',
      },
    ],
  },



  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: 'https://pancakeswap.finance/lottery',
  // },
  // {
  //   label: 'Collectibles',
  //   icon: 'NftIcon',
  //   href: 'https://pancakeswap.finance/nft',
  // },
  // {
  //   label: 'Team Battle',
  //   icon: 'TeamBattleIcon',
  //   href: 'https://pancakeswap.finance/competition',
  // },
  // {
  //   label: 'Teams & Profile',
  //   icon: 'GroupsIcon',
  //   items: [
  //     {
  //       label: 'Leaderboard',
  //       href: 'https://pancakeswap.finance/teams',
  //     },
  //     {
  //       label: 'Task Center',
  //       href: 'https://pancakeswap.finance/profile/tasks',
  //     },
  //     {
  //       label: 'Your Profile',
  //       href: 'https://pancakeswap.finance/profile',
  //     },
  //   ],
  // },
  // {
  //   label: 'Info',
  //   icon: 'InfoIcon',
  //   items: [
  //     {
  //       label: 'Overview',
  //       href: 'https://pancakeswap.info',
  //     },
  //     {
  //       label: 'Tokens',
  //       href: 'https://pancakeswap.info/tokens',
  //     },
  //     {
  //       label: 'Pairs',
  //       href: 'https://pancakeswap.info/pairs',
  //     },
  //     {
  //       label: 'Accounts',
  //       href: 'https://pancakeswap.info/accounts',
  //     },
  //   ],
  // },
  // {
  //   label: 'IFO',
  //   icon: 'IfoIcon',
  //   href: 'https://pancakeswap.finance/ifo',
  // },
  // {
  //   label: 'More',
  //   icon: 'MoreIcon',
  //   items: [
  //     {
  //       label: 'Contact',
  //       href: 'https://docs.pancakeswap.finance/contact-us',
  //     },
  //     {
  //       label: 'Voting',
  //       href: 'https://voting.pancakeswap.finance',
  //     },
  //     {
  //       label: 'Github',
  //       href: 'https://github.com/pancakeswap',
  //     },
  //     {
  //       label: 'Docs',
  //       href: 'https://docs.pancakeswap.finance',
  //     },
  //     {
  //       label: 'Blog',
  //       href: 'https://pancakeswap.medium.com',
  //     },
  //     {
  //       label: 'Merch',
  //       href: 'https://pancakeswap.creator-spring.com/',
  //     },
  //   ],
  // },
]

export default config