import AvatarPlaceholder from '../skeleton/avatar-placeholder';

const PromptCardLoader = () => {
   return (
      <div className="prompt_card ">
         <div className="animate-pulse">
            <div className="flex justify-between items-start gap-5">
               <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
                  <AvatarPlaceholder />
                  <div className="flex flex-col">
                     <h3 className="font-satoshi font-bold text-gray-900">
                        <div className="h-3.5 bg-gray-200 rounded-full dark:bg-gray-700 w-24 mb-4  "></div>
                     </h3>
                     <div className="font-inter text-sm text-gray-500">
                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-1"></div>
                     </div>
                  </div>
               </div>
               <div className="copy_btn"></div>
            </div>
            <div className="my-4 font-satoshi text-sm text-gray-700">
               <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-72 mb-4  "></div>
               <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-72 mb-4  "></div>
               <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-72 mb-4  "></div>
            </div>
            <div className="font-inter text-sm blue_gradient cursor-pointer">
               <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4  "></div>
            </div>
         </div>
      </div>
   );
};

export default PromptCardLoader;
