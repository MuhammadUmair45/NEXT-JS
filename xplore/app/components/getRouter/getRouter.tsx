'use client';

// import { useRouter } from 'next/navigation'

// export default function getRouter({ href }:any) {
//     const router = useRouter();
//     // const handleClick = (e:any) => {
//     //     e.preventDefault()
//     //     router.push(href)
//     // }
//     return (
//         <div>
//             <p>{href}</p>
//         </div>
//     )
// }

import { usePathname } from 'next/navigation';

const BlogSlug = () => {
//   const { asPath }:any = usePathname();
//   console.log(asPath); // '/blog/xyz'
//   //console.log(pathname); // '/blog/[slug]'
//   return (
//     <div></div>
//   );
    const currentPage = usePathname();
    return currentPage;
}

export default BlogSlug;