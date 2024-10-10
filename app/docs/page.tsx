import Link from "next/link";
import { Navbar } from "@/components/Navbar";

const docsSections = [
  {
    title: "Getting Started",
    description: `
      Welcome to AI-Craft! To start using the platform, create an account or log in. Once inside, you can begin by setting up your profile and choosing the types of social media content you want to generate. The platform provides AI-powered tools to craft Twitter threads, Instagram captions, LinkedIn posts, and more. Simply select a content type, enter the relevant information, and let our AI do the rest. After content creation, you can preview, edit, or directly publish the content to your social media accounts.
      \n\n
      Follow these steps to get started:
      1. Sign up or log in to access your dashboard.
      2. Choose a content category (e.g., Twitter Threads or Instagram Captions).
      3. Enter your desired topic or prompt, and the AI will generate the content.
      4. Preview the generated content and make any necessary edits.
      5. Share the post directly from the platform or download it for later use.
      `,
  },
  {
    title: "Twitter Threads",
    description: `
      AI-Craft allows you to generate engaging Twitter threads with ease. Simply input a topic or a few sentences about the thread's main theme, and our AI will craft a multi-part Twitter thread for you. This feature is perfect for content creators looking to provide valuable information, tell stories, or share insights in a thread format.
      \n\n
      Here's how to use the Twitter Threads feature:
      1. Select the 'Twitter Threads' option from the dashboard.
      2. Input the core topic or a sentence that encapsulates what you want the thread to cover.
      3. The AI will generate a detailed thread, breaking the content down into a series of connected tweets.
      4. Review each tweet and edit where needed. The tool ensures that each tweet is within the 280-character limit.
      5. Publish directly to your Twitter account or copy the content for manual posting.
      `,
  },
  {
    title: "Instagram Captions",
    description: `
      Writing the perfect Instagram caption is crucial for engagement, and AI-Craft helps you do just that. You can choose from several styles like inspirational, promotional, or humorous captions, based on your post's image or theme.
      \n\n
      How to use the Instagram Captions feature:
      1. Select 'Instagram Captions' from your dashboard.
      2. Provide a description of your image or post.
      3. Choose the tone and style of the caption (e.g., motivational, fun, or informative).
      4. Let the AI generate a caption that fits your style and tone.
      5. Review and tweak the caption if needed, then copy and paste it into your Instagram post.
      `,
  },
  {
    title: "LinkedIn Posts",
    description: `
      AI-Craft can assist in creating professional LinkedIn posts tailored to your industry. Whether you're sharing a business update, a professional achievement, or an insightful article, our AI helps you write posts that reflect your brand's voice.
      \n\n
      How to create a LinkedIn Post:
      1. Select 'LinkedIn Posts' from the options.
      2. Describe the topic or update you'd like to post about (e.g., job promotion, product launch, etc.).
      3. Choose the tone—professional, inspiring, or thought-provoking.
      4. The AI will generate a LinkedIn-friendly post that is concise, impactful, and tailored for your audience.
      5. Post directly from the platform or copy and share via your LinkedIn profile.
      `,
  },
  {
    title: "API Reference",
    description: `
      The API Reference section provides detailed documentation on integrating AI-Craft's content generation capabilities into your own applications. You can automate content creation for various social media platforms using our API.
      \n\n
      To use the API, follow these steps:
      1. Obtain your API key from the developer settings in your account.
      2. Make API requests to generate content by providing the required parameters, such as content type and prompt.
      3. The API will return AI-generated content that you can integrate into your app or website.
      4. Review the API documentation for detailed endpoints, parameters, and response formats.
      `,
  },
];

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      <Navbar />
      <main className="container mx-auto px-8 py-20">
        <h1 className="text-5xl font-bold mb-12 text-center text-white">
          Documentation
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {docsSections.map((section, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-gray-800 flex flex-col bg-gray-900"
            >
              <h2 className="text-2xl font-bold mb-3 text-white">
                {section.title}
              </h2>
              <p className="text-gray-400 mb-4 whitespace-pre-line">
                {section.description}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
