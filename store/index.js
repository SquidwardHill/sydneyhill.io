export const state = () => ({
  portfolio: [
    {
      id: '9',
      canonical: 'kids-art-box',
      title: 'Kids Art Box',
      description: 'Dashboard Design and Build',
      goal:
        'Develop a dashboard for users too manage all of their subscriptions, purchases, billing, and account information',
      process:
        'In this project, we developed our own subscription software to manage our companies growing consumer base. We were doing our customer management and support in house, so we wanted a way to offload that work by giving our customers more autonomy. We came up with the basic needs for the dashboard and what funcitonality we would need, then I designed and built it. I used Figma for the design, and Laravel + Blade, Eloquent, Sass, Jquery, Sql',
      image: require('@/assets/img/work/kab/kab-dash-home.jpg'),
      processImages: [
        {
          image: require('@/assets/img/work/kab/dashboard-view-design.jpg'),
          description: 'Figma design of Kids Art Box home dashboard view + Billing',
          imageIndex: 2
        },
        {
          image: require('@/assets/img/work/kab/dashboard-pause.jpg'),
          description: 'Pause/skip subscription funnel',
          imageIndex: 1
        }
      ]
    },
    {
      id: '8',
      canonical: 'Onyx',
      title: 'Onyx Security Solutions',
      description: 'Onyx Security rebranding, redesign and rebuild',
      goal:
        'Redesign and build and eccommerce website that is responsive, has great UX, and on a CMS.',
      process:
        'I worked with Onyx Security Solutions during their rebranding to redesign and rebuild their website. They preferred to work off of their existing Wordpress website, so after I completed the design mockups in Figma, I set up a child theme and rebuilt the pages. The site is also a membership and ecommerce, so upon request I customized many of the woocommerce templates to achieve desired aesthetics and functionality.',
      image: require('@/static/work/gifs/onyx.gif'),
      processImages: [
        {
          image: require('@/assets/img/work/onyx/individual-watchtower-design.jpg'),
          description: 'Individual Watchtower design',
          imageIndex: 3
        },
        {
          image: require('@/assets/img/work/onyx/business-watchtower-design.jpg'),
          description: 'Business Watchtower design',
          imageIndex: 2
        },
        {
          image: require('@/assets/img/work/onyx/individual-design.jpg'),
          description: 'Individual service design',
          imageIndex: 1
        }
      ]
    },
    {
      id: '7',
      canonical: 'DCS',
      title: 'Dupont Circle Solutions',
      description: 'Custom Wordpress Theme Build',
      goal:
        'Take a static HTML website and convert it to a Custom Wordpress Theme, Develop the Blog',
      process:
        'I worked with Dupont Circle Solutions to develop a custom Wordpress theme for their website. They already had the static site built, so my goal responsibility was to convert this to a Wordpress Theme, and then design and develop the Blog and Individual post pages based on the existing design and code. They wanted the ability to edit parts of the pages, as well as write content themselves, so I used custom fields to make content editable from the backend by page. This site is still in development.',
      image: require('@/static/work/gifs/DCS-home.gif')
    },
    {
      id: '6',
      canonical: 'SCC',
      title: 'Southeastern Climbers Coalition',
      description: 'Southeastern Climbers Coalition Website Redesign + Build',
      goal:
        'Redesign and build and eccommerce website that is responsive, has great UX, and on a CMS. SCC staff to be able to edit existing content, as well as create new content, pages, and modules after handoff.',
      process: `The goal of which was to redesign and rebuild the existing Southeastern Climbers Coalition's website.The SCC is a 501(3)(c) non-profit, of which I am a member and care a lot about, so this was very much a passion project for me.\n\nI prototyped and designed the site using Figma and Photoshop. The main feature for the home page was to spotlight the members, because they are really the lifeblood of the SCC by way of monetary, time and service donations. I wanted the site to feel relateable, as well as drive visitors to join or make donations. The site is built on Wordpress using a custom Divi child theme. I chose to go this route because Divi makes it easy for individuals to manipulate and create content with an easy visual editor, as well as many built in features and modules. 
      We chose Woocommerce for the online sales, which I was able to get the staff comfortable with doing screenshares and instructional videos.`,
      image: require('@/static/work/seclimbers-home.jpg'),
      processImages: [
        {
          image: require('@/assets/img/work/scc/scc-process.jpg'),
          description: 'Figma design of SCC home page',
          imageIndex: 3
        },
        {
          image: require('@/assets/img/work/scc/scc-give.jpg'),
          description: 'Concept for donation header',
          imageIndex: 2
        },
        {
          image: require('@/assets/img/work/scc/scc-about.jpg'),
          description: 'Design for about page',
          imageIndex: 1
        }
      ]
    },  
    {
      id: '5',
      canonical: 'Salsaritas',
      title: `Salsarita's`,
      description: "Salsarita's Website Redesign and Build",
      goal:
        'Redesign and build a responsive, ecommerce website on a CMS and increase organic site traffic, returning traffic, and paid search',
      process:
        'I worked on this project while I was at the Johnson Group. I worked with our graphic designers to give input on a new look for their site, while maintaining required brand guidelines. Once we finalized the design, I was responsible for building the site alongside our other developer.',
      image: require('@/static/work/gifs/salsaritas-home-2.gif')
    },
    {
      id: '4',
      canonical: 'USXpress Corporate',
      title: 'U.S. Xpress Corporate',
      description: 'U.S. Xpress Corporate Website Redesign and Build',
      goal:
        'Redesign and build a responsive, ecommerce website on a CMS and increase organic site traffic, returning traffic, and paid search',
      process:
        'I worked on this project while I was at the Johnson Group. I prototyped and designed this site in Adobe Illustrator and Figma. Once we finalized the design, I was responsible for building the site.',
      image: require('@/static/work/gifs/usxpress-home-2.gif')
    },
    {
      id: '3',
      canonical: 'Coolidge Memorial',
      title: 'Coolidge Memorial',
      description: 'Charles H. Coolidge Memorial Informational Website',
      goal:
        'Design and build a website to promote the knowlege of Charles H. Coolidge and his impact on Chattanooga, as well as promote a memorial center in his honor.',
      process:
        'I worked on this project while I was at the Johnson Group. I prototyped and designed this site in Adobe Illustrator and Figma. Once I finalized the design, I was responsible for building the site. The next iteration of the site was mohm.org for which the center is brought to life.',
      image: require('@/static/work/coolidge-hero.jpg')
    },
    {
      id: '2',
      canonical: 'Valor',
      title: 'Valor',
      description:
        'Charles H. Coolidge Medal of Honor Heritage Center website design and build',
      goal:
        'Design and build a website for the Charles H. Coolidge Medal of Honor Heritage Center in Chattanooga, TN.',
      process:
        'I worked on this project while I was at the Johnson Group.I prototyped and designed this site in Adobe Illustrator and Figma.Once I finalized the design, I was responsible for building the site.',
      image: require('@/static/work/gifs/valor.gif')
    },
    {
      id: '1',
      canonical: 'USX AMP',
      title: 'U.S. Xpress + AMP',
      description: 'U.S. Xpress Jobs AMP pages design and build',
      goal:
        'Design and build an AMP page for U.S. Xpress driver jobs in order to recruit drivers.',
      process:
        "I used the client and AE specs for this project to create the design in Figma. My goal was to create a layout that could host a variety of dynamic elements and text that would be built in our Automated Landing Page and Recruiting Software, Terri. Terri is an ASP.NET application, so I developed in AMP, Razor and Sass. The decision to create AMP versions of our landing pages were to take advantage of extremely fast loading times (think truck drivers, on the road with bad cell service/3G) and AMP's SEO advantages on Google.\n\nOur work was used as one of Google's ampproject case studies, you can read about here: https://www.ampproject.org/case-studies/us_xpress/",
      image: require('@/static/work/usxpress-terri-portfolio.jpg')
    }
  ],
  notepad: {
    text: 'This text is editable!'
  },
  counter: {
    count: 0
  }
})
