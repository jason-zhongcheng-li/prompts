import PromptCard from './PromptCard';
const PromptCardList = ({ data, handleTagClick }) => (
   <div className="mt-6 prompt_layout">
      {data.map((post) => (
         <PromptCard
            key={post._id}
            post={post}
            handleTagClick={handleTagClick}
         />
      ))}
   </div>
);

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
   const handlePromptEdit = async () => {};

   return (
      <section className="w-full">
         <h1 className="head_text text-left">
            <span className="blue_gradient">{name} Profile</span>
         </h1>
         <p className="desc text-left">{desc}</p>
         <PromptCardList
            data={data}
            handleEdit={handlePromptEdit}
            classNames="mt-8"
         />
      </section>
   );
};

export default Profile;
