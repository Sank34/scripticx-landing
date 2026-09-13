export const marketingContent = {
  hero: {
    eyebrow: "Programming education, practice and projects",
    title: "Learn programming through",
    accent: "coding problems and real projects.",
    description:
      "Study informatics, practise coding problems and build projects in a workspace made for learners, teachers and curious teams. :)",
    primary: "See what we’re building",
    secondary: "Open ScripticX",
    scroll: "Scroll to explore",
    visualLabel: "The ScripticX learning workspace",
  },
  pillars: {
    eyebrow: "The three parts of ScripticX",
    title: "We teach. We design. We code.",
    description:
      "Behind the name are three distinct parts: our Education Center, our software development studio and a programming platform built for learners and teachers.",
    items: [
      {
        key: "education",
        number: "01",
        title: "Education Center",
        description:
          "Informatics and machine learning for curious minds—with clear explanations, hands-on workshops and mentors who welcome every “why?”",
        href: "/education",
        action: "Step inside the classroom",
      },
      {
        key: "development",
        number: "02",
        title: "Development",
        description:
          "You bring the idea. We bring product thinking, design and code—plus honest updates while we build it.",
        href: "/development",
        action: "Build something with us",
      },
      {
        key: "platform",
        number: "03",
        title: "Platform",
        description:
          "Lessons, code, classes, projects and community in one tidy workspace. Fewer lost tabs, more things finished.",
        href: "/platform",
        action: "Take the platform tour",
      },
    ],
  },
  story: {
    eyebrow: "A clearer path through programming",
    title: "From your first lesson to your own programming projects.",
    description:
      "Learn the concepts, practise with real problems, write code in the ScripticX editor and keep growing through classes, groups and competitions.",
    panelEyebrow: "Your learning path",
    items: [
      {
        label: "Learn",
        title: "Get the idea. Then make it yours.",
        description:
          "Clear lessons, patient mentors and hands-on workshops turn intimidating concepts into things you can actually explain back.",
        metric: "A place for better questions.",
        meta: "Informatics · Machine learning · Workshops",
      },
      {
        label: "Practice",
        title: "Practice until “wait, what?” becomes “oh, got it!”",
        description:
          "Roadmaps, interactive problems, quizzes and useful progress insights make the next step clear for learners and teachers.",
        metric: "Progress you can actually see.",
        meta: "Problems · Courses · Progress",
      },
      {
        label: "Code",
        title: "Turn exercises into working projects.",
        description:
          "Write and run code, organise project files, connect GitHub and collaborate through Live Share—all inside your programming workspace.",
        metric: "A workspace for code that goes further.",
        meta: "Editor · GitHub · Live Share",
      },
      {
        label: "Grow",
        title: "Keep going, together.",
        description:
          "Join classes and groups, enter competitions and follow your progress with rewards that make regular practice feel worthwhile.",
        metric: "Progress feels better when it’s shared.",
        meta: "Classes · Groups · Competitions",
      },
    ],
  },
  showcase: {
    title: "All the useful bits. One platform.",
    tabs: [
      {
        key: "editor",
        label: "Editor",
        title: "Your code deserves more than a lonely text box.",
        description:
          "Build proper projects in MiniScript+, C++ or Python, connect GitHub and bring a teammate in with Live Share when two cursors are better than one.",
        points: [
          "Multi-language Monaco editor",
          "Project tree and GitHub",
          "Integrated run and terminal",
        ],
      },
      {
        key: "learn",
        label: "Learning",
        title: "A roadmap that remembers where you are.",
        description:
          "Follow clear lessons, try a quiz, solve the next recommended problem and always know what makes sense to learn next.",
        points: [
          "Markdown lessons",
          "Interactive quizzes",
          "Data-driven language paths",
        ],
      },
      {
        key: "workspaces",
        label: "Home",
        title: "Everything for school. Zero scavenger hunts.",
        description:
          "Upcoming work, recent learning and roadmap progress all meet on one student home—right where you expect them.",
        points: [
          "Weekly learning overview",
          "Upcoming assignments and deadlines",
          "Roadmap progress",
        ],
      },
      {
        key: "planner",
        label: "Planner",
        title: "Give every deadline a place to live.",
        description:
          "Plan study sessions, classes and deadlines, then enjoy the tiny satisfaction of checking each one off.",
        points: [
          "Weekly schedule",
          "Tasks and study sessions",
          "Deadlines and completion states",
        ],
      },
      {
        key: "notes",
        label: "Notes",
        title: "Save the “aha!” before it disappears.",
        description:
          "Keep algorithm explanations, code snippets and class notes organized beside the work that made them click.",
        points: [
          "Organized note folders",
          "Formatted text and code",
          "Shareable learning material",
        ],
      },
      {
        key: "whiteboard",
        label: "Whiteboard",
        title: "Think messy. Make it make sense.",
        description:
          "Sketch the half-formed idea, move the pieces around and connect the steps until the solution finally looks obvious.",
        points: [
          "Freeform canvas",
          "Notes and connectors",
          "Visual problem planning",
        ],
      },
      {
        key: "graphs",
        label: "Graphs",
        title: "Graphs are friendlier when you can poke them.",
        description:
          "Create vertices and edges, inspect the structure and watch an algorithm travel through it instead of only imagining it.",
        points: [
          "Interactive vertices and edges",
          "Graph properties",
          "Algorithm traversal",
        ],
      },
      {
        key: "classes",
        label: "Classes",
        title: "One class. One tidy home.",
        description:
          "Teachers create the space, learners join with a code, and assignments, resources and progress stop wandering off on their own.",
        points: [
          "Create or join with an invitation code",
          "Assignments, resources and deadlines",
          "Student counts and average progress",
        ],
      },
      {
        key: "problems",
        label: "Problems",
        title: "Run it. Break it. Learn why. Repeat. :D",
        description:
          "Write a solution, run the tests, read feedback that helps and keep your best score when everything finally turns green.",
        points: [
          "Difficulty and localized statements",
          "Integrated runner and test results",
          "Submission history and best score",
        ],
      },
      {
        key: "teacherDashboard",
        label: "Dashboard",
        title: "The whole class, minus the spreadsheet maze.",
        description:
          "See active classes, average completion, upcoming deadlines and recent submissions without stitching the story together yourself.",
        points: [
          "Students and active classes",
          "Completion and assignment totals",
          "Deadlines and recent activity",
        ],
      },
      {
        key: "students",
        label: "Students",
        title: "See who’s flying—and who needs a hand.",
        description:
          "Browse every learner across your classes, compare progress and open a profile when the numbers need a little context.",
        points: [
          "Cross-class student roster",
          "Individual completion progress",
          "Direct learner access",
        ],
      },
      {
        key: "assignments",
        label: "Assignments & tests",
        title: "Assignments that don’t vanish into the void.",
        description:
          "Create classwork, filter it by status and follow deadlines, submitted solutions and completion rates from one clear view.",
        points: [
          "Upcoming, past-due and open-ended work",
          "Deadlines and class context",
          "Completion and solution counts",
        ],
      },
      {
        key: "calendar",
        label: "Calendar",
        title: "Deadlines, finally behaving themselves.",
        description:
          "See every class deadline in one monthly view and jump straight to the assignment that needs attention.",
        points: [
          "Monthly class schedule",
          "Assignment deadlines and times",
          "Direct links to coursework",
        ],
      },
      {
        key: "analytics",
        label: "Analytics",
        title: "Spot the wobble before it becomes a problem.",
        description:
          "Compare class progress, celebrate who is on track and find the learners who could use a well-timed nudge.",
        points: [
          "Overall and per-class completion",
          "Students above or below thresholds",
          "Needs-attention view",
        ],
      },
      {
        key: "personalDashboard",
        label: "Dashboard",
        title: "Welcome back. We saved your spot.",
        description:
          "Your streak, reward points, solved problems and next activity are ready before you even ask, “where was I?”",
        points: [
          "Daily challenge and streak",
          "Reward points",
          "Learning and problem progress",
        ],
      },
      {
        key: "search",
        label: "Search",
        title: "Type less. Find the useful thing.",
        description:
          "Search across ScripticX and jump straight into the problem, lesson or community space you actually wanted.",
        points: [
          "Unified platform search",
          "Filtered result types",
          "Direct links to results",
        ],
      },
      {
        key: "collaboration",
        label: "Live Share",
        title: "Two cursors. One idea. Zero screen sharing.",
        description:
          "Start Live Share from the editor, invite the team and keep everyone in the same project while the code changes live.",
        points: [
          "Real-time code and project sync",
          "Participant presence",
          "Session links and invitations",
        ],
      },
      {
        key: "groups",
        label: "Groups",
        title: "A good place for the “silly” question.",
        description:
          "Create public or private groups, add channels and keep the conversations, mentions and files your people need close by.",
        points: [
          "Public and private groups",
          "Channels, mentions and pinned messages",
          "Invitations, attachments and member roles",
        ],
      },
      {
        key: "rewards",
        label: "Rewards",
        title: "Practice points, but make them yours.",
        description:
          "Earn points from problems and daily challenges, then spend them on profile items that make your progress look like yours.",
        points: [
          "Separate reward-points balance",
          "Frames, decorations, backgrounds and titles",
          "Inventory and equipped profile items",
        ],
      },
      {
        key: "competitions",
        label: "Competitions",
        title: "A little pressure. A lot of progress.",
        description:
          "Join coding competitions, solve timed problems and watch the live leaderboard when the organizer turns it on.",
        points: [
          "Timed problem sets",
          "Saved submissions and best scores",
          "Live rankings and competition phases",
        ],
      },
      {
        key: "leaderboard",
        label: "Leaderboard",
        title: "Friendly competition looks good on you.",
        description:
          "Compare points with the community and see how all those small, consistent practice sessions start to add up.",
        points: [
          "Community ranking",
          "Accumulated points",
          "Visible progress milestones",
        ],
      },
      {
        key: "feed",
        label: "Feed",
        title: "Share the win. Pass the idea on.",
        description:
          "Post a milestone or a neat code discovery, then see what the rest of the ScripticX community is figuring out.",
        points: [
          "Community posts",
          "Learning and code updates",
          "Reactions and replies",
        ],
      },
      {
        key: "documentation",
        label: "Documentation",
        title: "For when “I almost remember” isn’t enough.",
        description:
          "Look up MiniScript+ concepts, syntax and examples without losing the thread of what you were building.",
        points: [
          "Structured language reference",
          "Syntax examples",
          "Practical guidance",
        ],
      },
      {
        key: "examples",
        label: "Examples",
        title: "Good code is easier to start with.",
        description:
          "Browse working examples by topic and difficulty, then open one in the editor and turn it into something of your own.",
        points: [
          "Examples by difficulty",
          "Multiple programming topics",
          "Open directly in the editor",
        ],
      },
    ],
  },
  audiences: {
    switchLabel: "Pick your corner of ScripticX",
    tabs: {
      student: "For students",
      teacher: "For teachers",
      personal: "Personal",
    },
  },
  developmentSpotlight: {
    eyebrow: "ScripticX Development",
    title: "An idea is a good start. A clear process gets it built.",
    description:
      "We design and develop digital products for teams that want useful software and no mystery around the process—from the first free conversation to launch.",
    primary: "Discuss a project",
    secondary: "See how we work",
    carouselLabel: "Project process carousel",
    stepLabel: "Step",
    previous: "Previous step",
    next: "Next step",
    portalNote:
      "A dedicated client page keeps updates, files, approvals and decisions in one place.",
    steps: [
      {
        title: "Let’s talk",
        description:
          "We start with a free 30–45 minute conversation about the idea, audience, goal, budget and timing. You leave with a clearer next step, whether we work together or not.",
        update: "Goals, constraints and next steps",
        details: [
          "Goals & audience",
          "Constraints & timing",
          "Early product insights",
        ],
      },
      {
        title: "Plan it clearly",
        description:
          "We turn the conversation into a clear scope: deliverables, exclusions, milestones, estimated timing and cost. Everything is written down before work begins.",
        update: "Scope, timing and pricing agreed",
        details: [
          "Scope & deliverables",
          "Timeline & milestones",
          "Proposal & pricing",
        ],
      },
      {
        title: "Design & build",
        description:
          "After the proposal and contract are approved, we map the experience, design the interface and build in small, reviewable stages—with regular updates and feedback.",
        update: "Design and build reviews in progress",
        details: [
          "Kickoff & content",
          "UX, UI & prototype",
          "Development & reviews",
        ],
      },
      {
        title: "Launch & grow",
        description:
          "We test the product across devices, prepare the release and hand over the documentation and access. Then we agree on the support that makes sense next.",
        update: "QA, launch and handover ready",
        details: [
          "QA & final approval",
          "Launch & handover",
          "Ongoing support",
        ],
      },
    ],
  },
  gallery: {
    eyebrow: "No “sit still and just listen” required",
    title: "Workshops where curiosity gets to make things.",
    description:
      "Talk through the idea, test it, break it a little, fix it together. That’s when programming starts to stick.",
    action: "See how we learn",
    captions: [
      "Build it",
      "Figure it out together",
      "Celebrate the win",
      "Watch the idea run",
    ],
  },
  cta: {
    eyebrow: "Now, what about you?",
    title: "Learn something. Build something. Surprise yourself.",
    description:
      "Open ScripticX and start exploring, or tell us about the idea you’d love to bring to life. We’re listening. :)",
    primary: "Start exploring",
    secondary: "Tell us your idea",
  },
} as const;
