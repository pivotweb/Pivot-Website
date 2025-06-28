import { BlogPressCard } from "./BlogPressCard";
import "./Press.css"


export const BlogPress = () => {
    const posts = [
        { title: "Event Recaps", image: "/images/hero.png", type: "image"  },
        { title: "Founder’s Reflection", image: "/images/image16.jpg", type: "image"  },
        { title: "Featured Stories", image: "/images/pivot2.jpg", type: "image"  },
        { title: "Press Release", image: "/images/testimonial2.mp4", type: "video" },
        { title: "In the Media", image: "/images/image17.jpg", type: "image"  },
      ];
      
 return (
    <section className="my-15 text-center">
        <h1 className="text-2xl md:text-3xl font-bold">Blog & Press</h1>
        <p className="text-md md:text-lg ">News & Updates from The Pivot Desk</p>

        <main className="flex flex-col md:flex-row gap-4 justify-center mt-12 flex-wrap">
            {posts.map((post, idx) => (
                <BlogPressCard key={idx} title={post.title} src={post.image} type={post.type} />
            ))}
        </main>
    </section>
 )
}