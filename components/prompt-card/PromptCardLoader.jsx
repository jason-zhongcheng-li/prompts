'use client';

import SkeletonLoader from '@components/loader/SkeletonLoader';

const PromptCardLoader = () => {
   return (
      <div className="prompt_card">
         <div className="flex justify-between items-start gap-5">
            <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
               <SkeletonLoader />
               <div className="flex flex-col">
                  <h3 className="font-satoshi font-bold text-gray-900">
                     <SkeletonLoader />
                  </h3>
                  <div className="font-inter text-sm text-gray-500">
                     <SkeletonLoader />
                  </div>
               </div>
            </div>
            <div className="copy_btn">
               <SkeletonLoader />
            </div>
         </div>
         <div className="my-4 font-satoshi text-sm text-gray-700">
            <SkeletonLoader />
         </div>
         <div className="font-inter text-sm blue_gradient cursor-pointer">
            <SkeletonLoader />
         </div>

         <div className="mt-5 flex-center gap-4 border-t border-gray-200 pt-3">
            <div className="font-inter text-sm green_gradient cursor-pointer">
               <SkeletonLoader />
            </div>
            <div className="font-inter text-sm orange_gradient cursor-pointer">
               <SkeletonLoader />
            </div>
         </div>
      </div>
   );
};

export default PromptCardLoader;
