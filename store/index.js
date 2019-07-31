export const state = () => ({
  portfolio: [
    {
      id: '1',
      canonical: 'SCC',
      title: 'Southeastern Climbers Coalition',
      description: 'Southeastern Climbers Coalition Website Redesign + Build',
      goal:
        'Redesign and build and eccommerce website that is responsive, has great UX, and on a CMS. SCC staff to be able to edit existing content, as well as create new content, pages, and modules after handoff.',
      process: `This is an on-going freelance project, the goal of which was to redesign and rebuild the existing Southeastern Climbers Coalition's website.The SCC is a 501(3)(c) non-profit, of which I am a member and care a lot about, so this was very much a passion project for me.\n\nI prototyped and designed the site using Figma and Photoshop.I chose to put the spotlight on the members in the design because they are really the lifeblood of the SCC by way of monetary, time and service donations.I wanted the site to feel relateable, as well as drive visitors to join or make donations.\n\nI built the site on Wordpress using a Divi child theme.I chose to go this route because Divi makes it easy for individuals to manipulate and create content with an easy visual editor, as well as many built in features and modules.Also, there were budget constraints, so this allowed me to get it up and running quickly--while adding custom CSS, Javascript, and PHP as needed.I used Woocommerce for the online sales, which I was able to get the staff comfortable with doing screenshares and instructional videos.`,
      image: require('@/static/work/seclimbers-home.jpg')
    },
    {
      id: '2',
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
      id: '3',
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
      id: '4',
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
      id: '5',
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
      id: '6',
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
