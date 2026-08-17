import logo from "./icons/logo.png"
import bgGradient from "./images/image-bg-gradient.png"
import bgCat from "./images/image-bg-card.png"


export const assets = {
    logo,
    bgGradient,
    bgCat
}


export const blogData = [
    {
        id: 1,
        title: "Getting Started with React 19",
        subTitle: "A comprehensive guide to the latest React features",
        description: "<p>React 19 introduces several groundbreaking features that revolutionize the way we build modern web applications. From improved server components to enhanced performance optimizations, this version marks a significant milestone in React's evolution.</p><p>In this article, we'll explore the new capabilities and how they can benefit your projects.</p>",
        category: "Technology",
        image: bgCat,
        createdAt: "2026-01-15T10:30:00Z",
        updatedAt: "2026-01-20T14:45:00Z",
        __v: 0,
        isPublished: true
    },
    {
        id: 2,
        title: "Building Your First Startup",
        subTitle: "From idea to launch in 90 days",
        description: "<h2>The Journey Begins</h2><p>Starting a startup is both exciting and challenging. <strong>Success requires more than just a great idea</strong> - it demands dedication, planning, and execution.</p><ul><li>Validate your market</li><li>Build an MVP</li><li>Gather user feedback</li><li>Iterate quickly</li></ul>",
        category: "Startup",
        image: bgCat,
        createdAt: "2026-02-10T08:15:00Z",
        updatedAt: "2026-02-12T16:20:00Z",
        __v: 1,
        isPublished: true
    },
    {
        id: 3,
        title: "A Detailed Step by Step Guide to Manage Your Lifestyle",
        subTitle: "Balance work, health, and happiness",
        description: "<p>Modern life can be overwhelming, but with the right strategies, you can create a <em>balanced and fulfilling lifestyle</em>.</p><p>Learn how to prioritize what matters most, establish healthy routines, and maintain your well-being in our fast-paced world.</p><blockquote>Your lifestyle is a reflection of your priorities and choices.</blockquote>",
        category: "Lifestyle",
        image: bgCat,
        createdAt: "2026-03-05T12:00:00Z",
        updatedAt: "2026-03-05T12:00:00Z",
        __v: 0,
        isPublished: true
    },
    {
        id: 4,
        title: "Personal Finance 101",
        subTitle: "Master your money in simple steps",
        description: "<h2>Financial Freedom Starts Here</h2><p>Understanding personal finance doesn't have to be complicated. This guide breaks down essential concepts into <strong>actionable steps</strong> anyone can follow.</p><ol><li>Create a budget</li><li>Build an emergency fund</li><li>Eliminate high-interest debt</li><li>Start investing early</li></ol>",
        category: "Finance",
        image: bgCat,
        createdAt: "2026-04-01T09:30:00Z",
        updatedAt: "2026-04-03T11:15:00Z",
        __v: 2,
        isPublished: true
    },
    {
        id: 5,
        title: "The Future of AI in Web Development",
        subTitle: "How artificial intelligence is transforming coding",
        description: "<p>Artificial Intelligence is rapidly changing how we approach web development. From <strong>automated code generation</strong> to intelligent debugging tools, AI is becoming an indispensable partner for developers.</p><p>Discover how you can leverage these tools to boost your productivity and create better applications faster.</p>",
        category: "Technology",
        image: bgCat,
        createdAt: "2026-05-12T14:20:00Z",
        updatedAt: "2026-05-15T10:30:00Z",
        __v: 0,
        isPublished: true
    },
    {
        id: 6,
        title: "Scaling Your Startup",
        subTitle: "Growth strategies that actually work",
        description: "<h2>Ready to Scale?</h2><p>You've found product-market fit, and now it's time to grow. <em>Scaling requires different skills than starting</em>, and this guide will help you navigate the challenges ahead.</p><p>Learn proven strategies from successful founders who've been through the journey.</p>",
        category: "Startup",
        image: bgCat,
        createdAt: "2026-06-08T11:45:00Z",
        updatedAt: "2026-06-08T11:45:00Z",
        __v: 0,
        isPublished: false
    }
]

export const blogCategories = [
    'All',
    'Technology',
    'Startup',
    'Lifestyle',
    'Finance'
]

export const blogComments = [
    {
        id: 1,
        blog: blogData[0],
        name: "Sarah Johnson",
        content: "This is a great overview of React 19! I've been waiting for a comprehensive guide like this. The new features are truly game-changing.",
        isApproved: true,
        createdAt: "2026-01-16T08:20:00Z",
        updatedAt: "2026-01-16T08:20:00Z",
        __v: 0
    },
    {
        id: 2,
        blog: blogData[0],
        name: "David Chen",
        content: "Would love to see more examples of server components in action. Any chance of a follow-up article?",
        isApproved: true,
        createdAt: "2026-01-18T14:35:00Z",
        updatedAt: "2026-01-18T14:35:00Z",
        __v: 0
    },
    {
        id: 3,
        blog: blogData[0],
        name: "Emily Rodriguez",
        content: "The performance improvements alone make upgrading worthwhile. Thanks for breaking it down so clearly!",
        isApproved: true,
        createdAt: "2026-01-21T10:15:00Z",
        updatedAt: "2026-01-21T10:15:00Z",
        __v: 0
    },
    {
        id: 4,
        blog: blogData[1],
        name: "Michael Thompson",
        content: "As someone who just launched their first startup, this resonates so much. The 90-day timeline is ambitious but totally doable with focus.",
        isApproved: true,
        createdAt: "2026-02-11T09:45:00Z",
        updatedAt: "2026-02-11T09:45:00Z",
        __v: 0
    },
    {
        id: 5,
        blog: blogData[1],
        name: "Jessica Park",
        content: "The MVP approach saved us months of wasted effort. Validate early, iterate fast - can't emphasize this enough!",
        isApproved: true,
        createdAt: "2026-02-13T16:20:00Z",
        updatedAt: "2026-02-13T16:20:00Z",
        __v: 0
    },
    {
        id: 6,
        blog: blogData[1],
        name: "Anonymous",
        content: "This is spam content trying to promote unrelated products.",
        isApproved: false,
        createdAt: "2026-02-14T11:30:00Z",
        updatedAt: "2026-02-14T11:30:00Z",
        __v: 1
    },
    {
        id: 7,
        blog: blogData[2],
        name: "Amanda Wilson",
        content: "Exactly what I needed to read today. Work-life balance has been such a struggle lately. These tips are practical and actionable.",
        isApproved: true,
        createdAt: "2026-03-06T07:50:00Z",
        updatedAt: "2026-03-06T07:50:00Z",
        __v: 0
    },
    {
        id: 8,
        blog: blogData[2],
        name: "Robert Martinez",
        content: "The quote about lifestyle being a reflection of priorities really hit home. Time to reassess my choices!",
        isApproved: true,
        createdAt: "2026-03-08T13:25:00Z",
        updatedAt: "2026-03-08T13:25:00Z",
        __v: 0
    },
    {
        id: 9,
        blog: blogData[3],
        name: "Lisa Anderson",
        content: "Finally, a finance guide that doesn't make my head spin! The step-by-step approach is perfect for beginners.",
        isApproved: true,
        createdAt: "2026-04-02T10:40:00Z",
        updatedAt: "2026-04-02T10:40:00Z",
        __v: 0
    },
    {
        id: 10,
        blog: blogData[3],
        name: "James Taylor",
        content: "Building that emergency fund changed my life. Started small but it's given me so much peace of mind.",
        isApproved: true,
        createdAt: "2026-04-04T15:55:00Z",
        updatedAt: "2026-04-04T15:55:00Z",
        __v: 0
    },
    {
        id: 11,
        blog: blogData[3],
        name: "Karen White",
        content: "The investing advice is solid. Wish I had started earlier, but better late than never!",
        isApproved: true,
        createdAt: "2026-04-05T09:10:00Z",
        updatedAt: "2026-04-05T09:10:00Z",
        __v: 0
    },
    {
        id: 12,
        blog: blogData[4],
        name: "Christopher Lee",
        content: "AI tools have genuinely transformed my workflow. What used to take hours now takes minutes. The future is here!",
        isApproved: true,
        createdAt: "2026-05-13T11:30:00Z",
        updatedAt: "2026-05-13T11:30:00Z",
        __v: 0
    },
    {
        id: 13,
        blog: blogData[4],
        name: "Nicole Garcia",
        content: "Great article! Would love to hear more about specific AI tools you recommend for web developers.",
        isApproved: true,
        createdAt: "2026-05-16T14:45:00Z",
        updatedAt: "2026-05-16T14:45:00Z",
        __v: 0
    },
    {
        id: 14,
        blog: blogData[4],
        name: "Daniel Kim",
        content: "The automated code generation examples are impressive, but I'm curious about the learning curve. How long before developers can effectively use these tools?",
        isApproved: true,
        createdAt: "2026-05-17T08:20:00Z",
        updatedAt: "2026-05-17T08:20:00Z",
        __v: 0
    },
    {
        id: 15,
        blog: blogData[5],
        name: "Rachel Brown",
        content: "This comes at the perfect time! We're at that inflection point right now. The scaling strategies are super helpful.",
        isApproved: true,
        createdAt: "2026-06-09T10:30:00Z",
        updatedAt: "2026-06-09T10:30:00Z",
        __v: 0
    },
    {
        id: 16,
        blog: blogData[5],
        name: "Test User",
        content: "Testing comment moderation system.",
        isApproved: false,
        createdAt: "2026-06-10T12:00:00Z",
        updatedAt: "2026-06-10T15:30:00Z",
        __v: 2
    }
]

