import img1 from "../assets/HomeImg/blog_1.png";
import img2 from "../assets/HomeImg/blog_2.png";
import img3 from "../assets/HomeImg/blog_3.png";
import img4 from "../assets/HomeImg/blog_4.png";
import img5 from "../assets/HomeImg/blog_5.png";
import img6 from "../assets/HomeImg/blog_6.png";

export interface BlogContentBlock {
    type: 'paragraph' | 'h2' | 'h3' | 'list' | 'image';
    text?: string; // HTML string supported for bold/links
    items?: string[]; // Simple list
    structuredItems?: { title: string; desc: string }[]; // Title + Desc list
    src?: string;
    alt?: string;
}

// Interface for Blog Post
export interface BlogPost {
    id: string | number;
    title: string;
    image: string;
    author: string;
    // date: string;
    // Flexible content blocks
    content: BlogContentBlock[];
}

// Helper to generate 40 posts
const generateBlogPosts = (): BlogPost[] => {
    const images = [img1, img2, img3, img4, img5, img6];
    const posts: BlogPost[] = [];

    // Detailed Content for Blog Post 2
    const socialMediaGuideContent: BlogContentBlock[] = [
        {
            type: 'paragraph',
            text: "It builds trust before the first transaction. When a potential customer discovers you through a referral or Google search, the first thing they do is check your Instagram or Facebook. An active, professional profile tells them you're legitimate and current."
        },
        {
            type: 'paragraph',
            text: "It keeps you top-of-mind. Most people won't buy the first time they see you. But when they see your posts regularly — helpful tips, customer success stories, behind-the-scenes content — you stay in their mind. When they're ready to buy, they think of you first."
        },
        {
            type: 'paragraph',
            text: "It's free advertising (if you do it right). Unlike paid ads, organic social media costs nothing but time. A single viral post or shared customer testimonial can bring in more leads than a ₹10,000 ad campaign."
        },
        {
            type: 'paragraph',
            text: "It humanizes your brand. People buy from people, not logos. Social media lets customers see your team, your values, and your personality. This emotional connection converts better than any sales pitch."
        },
        {
            type: 'h2',
            text: "Step 1 – Choose the Right Platform (Don't Try to Be Everywhere)"
        },
        {
            type: 'paragraph',
            text: "The biggest mistake local businesses make is trying to manage Facebook, Instagram, LinkedIn, YouTube, and Twitter all at once. You end up posting inconsistently on all of them and seeing no results anywhere. Instead, pick one primary platform where your customers actually spend time, and one secondary platform for backup."
        },
        {
            type: 'h3',
            text: "Platform Selection Guide for Local Businesses"
        },
        {
            type: 'list',
            structuredItems: [
                {
                    title: "Facebook (Primary for most local businesses)",
                    desc: "<b>Best for:</b> Home services, retail, restaurants, salons, healthcare, local events. <br/><b>Audience:</b> 25–55 years old, broad demographic reach. <br/><b>Why it works:</b> Strong local discovery features, Facebook Groups, easy sharing, older demographic with buying power. <br/><b>What to post:</b> Educational tips, customer testimonials, offers, business updates, local events"
                },
                {
                    title: "Instagram (Primary for visual businesses)",
                    desc: "<b>Best for:</b> Food & beverage, fashion, fitness, beauty, interiors, real estate, photography. <br/><b>Audience:</b> 18–45 years old, visually-driven, high engagement. <br/><b>Why it works:</b> Reels, Stories, visual storytelling, younger audience with growing purchasing power. <br/><b>What to post:</b> Behind-the-scenes, before/after transformations, quick tips in Reels format, customer highlights"
                },
                {
                    title: "LinkedIn (Primary for B2B services)",
                    desc: "<b>Best for:</b> Consulting, professional services, B2B suppliers, corporate training, IT services. <br/><b>Audience:</b> Business owners, decision-makers, professionals. <br/><b>Why it works:</b> High-quality leads, less noise, authority-building content performs well. <br/><b>What to post:</b> Industry insights, case studies, thought leadership, company updates"
                },
                {
                    title: "YouTube (Secondary, if you can create video content)",
                    desc: "<b>Best for:</b> Any business that can demonstrate expertise through video (how-tos, tutorials, explainers). <br/><b>Why it works:</b> Long-term SEO value, establishes authority, evergreen content. <br/><b>What to post:</b> Educational tutorials, product demos, customer success stories, Q&A videos"
                }
            ]
        },
        {
            type: 'paragraph',
            text: "Start with one platform. Post consistently for 90 days. Once you have a rhythm, expand to a second platform. For more on choosing content formats across platforms, read our guide on which format works best for your brand story."
        },
        {
            type: 'h2',
            text: "Step 2 – Set Up Your Profile for Maximum Conversions"
        },
        {
            type: 'paragraph',
            text: "Your social media profile is often the first impression potential customers get. A poorly set up profile wastes every follower you earn."
        },
        {
            type: 'h3',
            text: "Profile Optimization Checklist"
        },
        {
            type: 'list',
            structuredItems: [
                { title: "Profile Picture", desc: "Use your logo or a professional photo of your storefront/team. Make sure it's high-resolution and recognizable even at small sizes." },
                { title: "Bio/About Section", desc: "First line: What you do and who you serve mixed (e.g., 'Home cleaning services for busy families in Mumbai'). Second line: Your unique value (e.g., 'Eco-friendly products, same-day booking available'). Third line: Clear call-to-action with contact method." },
                { title: "Contact Information", desc: "Add phone number, email, WhatsApp link (clickable). Include your full business address for local SEO benefits. Link to your website (if you don't have one yet, check out our guide on <a href='#' class='text-blue-600 underline'>what high-converting websites look like</a>)." },
                { title: "Highlights/Featured Posts", desc: "Create highlight categories: Services, Reviews, FAQs, Offers, Behind-the-Scenes. Pin your best-performing post or most important announcement at the top." },
                { title: "Call-to-Action Buttons", desc: "Facebook: Use 'Call Now', 'Send Message', or 'Book Now' buttons. Instagram: Use 'Contact' button linking to WhatsApp or your booking page." }
            ]
        },
        {
            type: 'paragraph',
            text: "This setup takes 30 minutes and dramatically increases the chances that a profile visitor becomes a customer."
        },
        {
            type: 'h2',
            text: "Step 3 – Create a Simple Content Strategy (The 70-20-10 Rule)"
        },
        {
            type: 'paragraph',
            text: "Most local businesses fail at social media because they either post randomly or only post promotions. Both approaches kill engagement. The solution is a proven content framework that balances value, engagement, and sales."
        },
        {
            type: 'h3',
            text: "The 70-20-10 Content Framework"
        },
        {
            type: 'list',
            structuredItems: [
                { title: "70% Educational/Helpful Content", desc: "Answer common customer questions. Share tips, how-tos, and quick wins. Industry news or trends explained simply. <br/><i>Examples: '5 signs your AC needs servicing', 'How to choose the right interior paint color'</i>" },
                { title: "20% Engagement/Brand Content", desc: "Behind-the-scenes of your business. Team introductions and culture. Customer success stories and testimonials. Community involvement, local events. <br/><i>Examples: 'Meet our team member of the month', 'Before/after: Customer kitchen transformation'</i>" },
                { title: "10% Promotional Content", desc: "Direct offers, discounts, and CTAs. New product/service launches. Limited-time deals. <br/><i>Examples: '20% off this weekend only', 'Book now for summer packages'</i>" }
            ]
        },
        {
            type: 'paragraph',
            text: "This mix keeps your audience engaged without overwhelming them with sales pitches. People follow brands that add value, not brands that constantly sell. For a step-by-step system to plan a full month of content in advance, check out our guide on <a href='#' class='text-blue-600 underline'>content calendar planning</a>."
        },
        {
            type: 'h2',
            text: "Step 4 – Plan Your Posting Schedule (Consistency Beats Perfection)"
        },
        {
            type: 'paragraph',
            text: "The biggest reason local businesses quit social media is they start strong, burn out, and stop posting. The algorithm punishes inconsistency, so sporadic posting is worse than not posting at all."
        },
        {
            type: 'h3',
            text: "Realistic Posting Frequency by Platform"
        },
        {
            type: 'list',
            structuredItems: [
                { title: "Facebook", desc: "<b>Minimum:</b> 3 posts per week. <b>Ideal:</b> 5–7 posts per week. <b>Best times:</b> 9–11 AM, 1–3 PM, 7–9 PM (when people check during breaks)." },
                { title: "Instagram", desc: "<b>Minimum:</b> 3 posts + 5 Stories per week. <b>Ideal:</b> 5 posts + 7 Stories per week + 3 Reels per week. <b>Best times:</b> 10 AM–12 PM, 5–7 PM (commute hours)." },
                { title: "LinkedIn", desc: "<b>Minimum:</b> 2 posts per week. <b>Ideal:</b> 3–4 posts per week. <b>Best times:</b> Tuesday–Thursday, 8–10 AM, 12–1 PM." },
                { title: "YouTube", desc: "<b>Minimum:</b> 1 video per week. <b>Ideal:</b> 2 videos per week. <b>Upload schedule:</b> Consistent day/time each week." }
            ]
        },
        {
            type: 'paragraph',
            text: "<b>How to Stay Consistent Without Burning Out:</b><br/>Batch Content Creation: Set aside 2–3 hours once a week to create all your content at once.<br/>Reuse and Repurpose: One piece of content can be used multiple ways.<br/>Keep a Content Bank: Store customer results, reviews, and team moments to pull from."
        },
        {
            type: 'h2',
            text: "Step 5 – Write Captions That Actually Get Engagement"
        },
        {
            type: 'paragraph',
            text: "A great photo with a boring caption gets ignored. A simple photo with a compelling caption gets shares, comments, and leads."
        },
        {
            type: 'h3',
            text: "Caption Formula That Works"
        },
        {
            type: 'list',
            structuredItems: [
                { title: "Hook (First Line)", desc: "Grab attention immediately. The first 1–2 lines show up before '...more', so make them count. <br/>❌ Bad: 'We are happy to announce our new service...'<br/>✅ Good: 'Most people make this expensive mistake when hiring a plumber.'" },
                { title: "Value (Middle)", desc: "Deliver on the promise of your hook. Educate, entertain, or inspire. Share a quick tip, tell a short story, or explain a common problem and solution." },
                { title: "Call-to-Action (Last Line)", desc: "Tell people exactly what to do next. <br/>Examples: 'Save this post for later', 'DM us QUOTE to get started', 'What is your biggest challenge with [topic]? Comment below.'" }
            ]
        },
        {
            type: 'paragraph',
            text: "<b>Pro Tips:</b> Use line breaks to make captions easy to read. Ask questions to encourage comments. Include 3–5 relevant hashtags. Tag your location on every post for local visibility."
        }
    ];

    // Dummy Content for other posts
    const waterContent: BlogContentBlock[] = [
        {
            type: 'paragraph',
            text: "Water is the essence of life, making up about 60% of the human body. Staying hydrated is crucial for maintaining bodily functions, regulating temperature, and keeping your energy levels up throughout the day."
        },
        {
            type: 'h2',
            text: "The Role of Water in the Human Body"
        },
        {
            type: 'list',
            structuredItems: [
                { title: "Regulating Body Temperature", desc: "Water helps release heat from the body when sweat stimulates cooling." },
                { title: "Nutrient Transportation", desc: "Blood is largely composed of water, which carries essential nutrients and oxygen to cells throughout your body." },
                { title: "Waste Removal", desc: "Water is vital for sweating, urination, and bowel movements." }
            ]
        },
        {
            type: 'paragraph',
            text: "Appropriate fluid intake is vital for maintaining health and optimal physical performance."
        }
    ];


    for (let i = 1; i <= 40; i++) {
        // Determine content based on ID
        let content = waterContent;
        let title = `The Best Bottled Water Brands of 2023 - Post ${i}`;
        // let date = "Oct 15, 2021";

        if (i === 1) {
            title = "Why Drinking Water is Essential for Your Health?";
            // date = "26th Dec 2024";
        }

        if (i === 2) {
            title = "The Ultimate Social Media Guide for Local Businesses";
            // date = "26th Dec 2024"; // Assuming same date as new content request usually implies fresh
            content = socialMediaGuideContent;
        }

        posts.push({
            id: i,
            title: title,
            image: images[(i - 1) % images.length],
            author: "Wpsmasher",
            // date: date,
            content: content
        });
    }
    return posts;
};

export const blogPosts = generateBlogPosts();