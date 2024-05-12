"use client";
import { useForm, SubmitHandler } from "react-hook-form";

type Input = {
  _id: string;
  name: string;
  email: string;
  comment: string;
};

const Comments = ({ post }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>();

  //HANDLES THE FORM SUBMIT
  const onSubmit: SubmitHandler<Input> = (data) => {
    fetch("/api/createComment", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then(() => {
        console.log(data);
      })
      .catch((err: any) => {
        console.log(err);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col p-5 my-10 max-w-2xl mx-auto mb-10">
      <h3 className="text-base text-[#E7493F]">Enjoyed this article?</h3>
      <h3 className="text-3xl font-bold">Leave a comment</h3>
      <hr className="py-3 mt-2" />

      <div className="block mb-5">
        <label>Name</label>
        <input
          {...register("name", { required: true })}
          className="shadow border border-b-gray-200 bg-transparent rounded py-2 px-3 mt-1 block w-full"
          placeholder="John Doe"
          type="text"
        />
      </div>
      <div className="block mb-5">
        <label>Email</label>
        <input
          {...register("email", { required: true })}
          className="shadow border border-b-gray-200 bg-transparent rounded py-2 px-3 mt-1 block w-full"
          placeholder="johndoe@gmail.com"
          type="email"
        />
      </div>
      <div className="block mb-5">
        <label>Comment</label>
        <textarea
          {...register("comment", { required: true })}
          className="shadow border border-b-gray-200 bg-transparent rounded py-2 px-3 mt-1 block w-full"
          placeholder="Your comment..."
          rows={8}
        />
      </div>

      <div className="flex flex-col">
        {errors.name && <span className="text-red-500">The name field is required!</span>}
        {errors.email && <span className="text-red-500">The email field is required!</span>}
        {errors.comment && <span className="text-red-500">The comment field is required!</span>}
      </div>

      <input {...register("_id")} type="hidden" name="_id" value={post._id} />

      <input
        type="submit"
        className="shadow bg-[#e74a3fab] hover:bg-[#e7493f] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded cursor-pointer"
      />
    </form>
  );
};
export default Comments;
