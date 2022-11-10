import React from 'react';
import useTitle from '../../../hooks/useTitles';

const Blog = () => {
	useTitle('Blog');
    return (
        <main className="py-6 lg:w-4/5 mx-auto">
  <div className="mb-12">
    <div className="mb-12">
      <div className="flex flex-col md:flex-row w-full lg:w-10/12">
        <div className="md:mr-4 mb-2 md:mb-0 md:w-4/12 ">
          <a className="bg-gray-100" href="/blog/2018/12/styling-css/">
            <img width="640" height="360" className="rounded mb-3 hover:opacity-70 transition duration-300 ease-in-out" alt="Styling CSS" src="https://source.unsplash.com/INHtWKpBTsA/640x360" />
          </a>
        </div>
        <div className="flex-1">
          <div className="flex items-center">
            <div className="text-sm font-medium text-gray-700">Dec 29, 2018</div>
          </div>
          <a href="/blog/2018/12/styling-css/" className="hover:text-green-400">
            <h2 className="text-2xl font-semibold mb-1">Styling CSS</h2>
          </a>
          <p className="text-base font-light text-gray-600 mb-4">Learn how to use Markdown to write blog posts. Understand front-matter and how it is used in templates.</p>
          <div className="mb-2">
            <a className="p-1 px-3 mr-1 mb-1 inline-block text-xs font-mono rounded bg-green-200 text-green-800 hover:bg-blue-200 hover:text-blue-800 transition duration-300 ease-in-out" href="/categories/development">Development</a>
            <a className="p-1 px-3 mr-1 mb-1 inline-block text-xs font-mono rounded bg-green-200 text-green-800 hover:bg-blue-200 hover:text-blue-800 transition duration-300 ease-in-out" href="/categories/javascript">Javascript</a>
          </div>
        </div>
      </div>
    </div>
    <div className="mb-12">
      <div className="flex flex-col md:flex-row w-full lg:w-10/12">
        <div className="md:mr-4 mb-2 md:mb-0 md:w-4/12 ">
          <a className="bg-gray-100" href="/blog/2018/12/hosting-your-static-site/">
            <img width="640" height="360" className="rounded mb-3 hover:opacity-70 transition duration-300 ease-in-out" alt="Hosting Your Static Site" src="https://source.unsplash.com/y3PdLg_zSDs/640x360" />
          </a>
        </div>
        <div className="flex-1">
          <div className="flex items-center">
            <div className="text-sm font-medium text-gray-700">Dec 29, 2018</div>
          </div>
          <a href="/blog/2018/12/hosting-your-static-site/" className="hover:text-green-400">
            <h2 className="text-2xl font-semibold mb-1">Hosting Your Static Site</h2>
          </a>
          <p className="text-base font-light text-gray-600 mb-4">Hosting your website as a static site will improve performance and improve security.</p>
          <div className="mb-2">
            <a className="p-1 px-3 mr-1 mb-1 inline-block text-xs font-mono rounded bg-green-200 text-green-800 hover:bg-blue-200 hover:text-blue-800 transition duration-300 ease-in-out" href="/categories/hosting">Hosting</a>
            <a className="p-1 px-3 mr-1 mb-1 inline-block text-xs font-mono rounded bg-green-200 text-green-800 hover:bg-blue-200 hover:text-blue-800 transition duration-300 ease-in-out" href="/categories/development">Development</a>
          </div>
        </div>
      </div>
    </div>
    <div className="mb-12">
      <div className="flex flex-col md:flex-row w-full lg:w-10/12">
        <div className="md:mr-4 mb-2 md:mb-0 md:w-4/12 ">
          <a className="bg-gray-100" href="/blog/2018/12/designing-your-brand/">
            <img width="640" height="360" className="rounded mb-3 hover:opacity-70 transition duration-300 ease-in-out" alt="Designing Your Brand" src="https://source.unsplash.com/YmQ0-nmWcV0/640x360" />
          </a>
        </div>
        <div className="flex-1">
          <div className="flex items-center">
            <div className="text-sm font-medium text-gray-700">Dec 20, 2018</div>
          </div>
          <a href="/blog/2018/12/designing-your-brand/" className="hover:text-green-400">
            <h2 className="text-2xl font-semibold mb-1">Designing Your Brand</h2>
          </a>
          <p className="text-base font-light text-gray-600 mb-4">Branding is an intrinsic part of your companies success, learn why your brand matters.</p>
          <div className="mb-2">
            <a className="p-1 px-3 mr-1 mb-1 inline-block text-xs font-mono rounded bg-green-200 text-green-800 hover:bg-blue-200 hover:text-blue-800 transition duration-300 ease-in-out" href="/categories/branding">Branding</a>
          </div>
        </div>
      </div>
    </div>
    <div className="mb-12">
      <div className="flex flex-col md:flex-row w-full lg:w-10/12">
        <div className="md:mr-4 mb-2 md:mb-0 md:w-4/12 ">
          <a className="bg-gray-100" href="/blog/2018/12/optimizing-your-website/">
            <img width="640" height="360" className="rounded mb-3 hover:opacity-70 transition duration-300 ease-in-out" alt="Optimizing Your Website" src="https://source.unsplash.com/MS7KD9Ti7FQ/640x360" />
          </a>
        </div>
        <div className="flex-1">
          <div className="flex items-center">
            <div className="text-sm font-medium text-gray-700">Dec 20, 2018</div>
          </div>
          <a href="/blog/2018/12/optimizing-your-website/" className="hover:text-green-400">
            <h2 className="text-2xl font-semibold mb-1">Optimizing Your Website</h2>
          </a>
          <p className="text-base font-light text-gray-600 mb-4">Making sure your website runs fast and loads quickly is a fundamental part of the web design and seo process.</p>
          <div className="mb-2">
            <a className="p-1 px-3 mr-1 mb-1 inline-block text-xs font-mono rounded bg-green-200 text-green-800 hover:bg-blue-200 hover:text-blue-800 transition duration-300 ease-in-out" href="/categories/development">Development</a>
            <a className="p-1 px-3 mr-1 mb-1 inline-block text-xs font-mono rounded bg-green-200 text-green-800 hover:bg-blue-200 hover:text-blue-800 transition duration-300 ease-in-out" href="/categories/web-design">Web Design</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
    );
};

export default Blog;