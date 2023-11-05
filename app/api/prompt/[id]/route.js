import { connectToDB } from '@utils/database';
import Prompt from '@models/prompt';

// GET (read)

export const GET = async (request, { params }) => {
   try {
      await connectToDB();

      const prompt = await Prompt.findById(params.id).populate('creator');

      if (!prompt) {
         return new Response('Prompt not found', { status: 404 });
      }

      return new Response(JSON.stringify(prompt), { status: 200 });
   } catch (error) {
      return new Response(
         JSON.stringify('Failed to fetch all prompts', { status: 400 }),
      );
   }
};

// PATCH (edit)

export const PATCH = async (request, { param }) => {
   const { prompt, tag } = await request.json();

   try {
      await connectToDB();

      const existingPrompt = await Prompt.findById(param.id);
      console.log('existingPrompt = ', existingPrompt);

      if (!existingPrompt) {
         return new Response('Prompt not found', { status: 404 });
      }

      existingPrompt.prompt = prompt;
      existingPrompt.tag = tag;

      await existingPrompt.save();

      return new Response(JSON.stringify(existingPrompt), { status: 200 });
   } catch (error) {
      console.error(error);
      return new Response(
         JSON.stringify('Failed to update prompt', { status: 400 }),
      );
   }
};

// DELETE (delete)
export const DELETE = async (request, { param }) => {
   try {
      await connectToDB();

      await Prompt.findByIdAndRemove(param.id);

      return new Response(
         JSON.stringify('Prompt deleted successfully', { status: 200 }),
      );
   } catch (error) {
      console.error(error);
      return new Response(
         JSON.stringify('Failed to delete prompt', { status: 500 }),
      );
   }
};
