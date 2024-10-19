## changed files🧮 at branch : "tours-portfolio-project"
* tailwind.config.js
* src\middleware.js
* src\app\(client)\page.js
* src\app\(client)\all-tours\page.jsx (newly created)
* src\app\(client)\blogsDetails\DEMO_ID\page.jsx (newly created)
* src\app\(client)\contact\page.jsx
* src\app\(client)\locations\DEMO_ID\page.jsx  (newly created)
* src\app\(client)\packages\[packageType]\page.jsx
* src\app\(client)\tours\DEMO_ID\page.jsx (newly created)
* src\app\dashboard\(manageProfile)\my-wishlist\page.jsx
* src\components\blogsPage\AllBlogs.jsx
* src\components\blogsPage\LocationCardComponent.jsx
* src\components\blogsPage\RecentBlogsComponent.jsx
* src\components\blogsPage\SingleBlogCard.jsx
* src\components\blogsPage\TagsBlogSection.jsx
* src\components\homepage\GoExotic.jsx
* src\components\homepage\PopularTours.jsx
* src\components\packageBookingPage\PackageBookingForm.jsx
* src\components\shared\LocationsCard.jsx
* src\components\shared\ToursCardsSection.jsx
* README.md
* src\app\dashboard\(manageTours)\all-tours\page.jsx
* src\app\dashboard\(manageBlogs)\all-blogs\page.jsx
* src\app\dashboard\(manageLocations)\all-locations\page.jsx
* firebase.config.js


### login এর ্কাজ করব "tours-portfolio-project" branch এ আর যখন backend ready হবে just এই পেইজ গুলো তে গিলে comment করা code গুলো কে revive দিব আর login page এর functionality check দিব

* src\components\shared\Navbar\Navbar2.jsx
* src\components\shared\Navbar\navComponents\UserLogOutDrop.jsx


## during vercel deploy deleted files and codes from "tours-asif-client-forDeploy" branch
* src\app\(client)\blogs\[blogCategory]\page.jsx
```
import AllBlogs from "@/components/blogsPage/AllBlogs";

export async function generateStaticParams() {
  const { categories } = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/blogs/categories/unique`
  ).then((res) => res.json());

  const staticParams4CategorisedBlogs = categories.map((category) => ({
    blogCategory: category,
  }));
  return staticParams4CategorisedBlogs;
}

export const metadata = {
  title: {
    absolute: "Blog - JMC Tours & Travels", // it overwrites default title of layout.js
  },
  description: "Blog",
};

const CategorisedBlogs = ({ params }) => {
  return <AllBlogs blogCategory={params?.blogCategory} />;
};

export default CategorisedBlogs;

```
* 
```

```
* 
```

```
* 
```

```
* 
```

```
* 
```

```
* 
```

```
* 
```

```
* 
```

```
* 
```

```
* 
```

```
* 
```

```
* 
```

```
* 
```

```
* 
```

```

