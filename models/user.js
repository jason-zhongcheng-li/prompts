import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
   email: {
      type: String,
      unique: [true, 'Email already exists!'],
      required: [true, 'Email is required!'],
   },
   username: {
      type: String,
      required: [true, 'Username is required!'],
      match: [
         /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
         'Username invalid, it should contain 8-20 alphanumeric letters and be unique!',
      ],
   },
   image: {
      type: String,
   },
});

/*
    If we are working on always-on, always-running B/E server, we need to do following:

    // const User = model('User', UserSchema);

    But in Nextjs, the route is only running at the time when it is called
*/

/*
    The "models" object is provided by the Mongoose library and stores all the registered models.
    
    If a modle named "User" already exists in the "models" object, it assigns that existing model
    to the "User" variable.

    If a modle name "User" does not exist in the "models" object, the "model" function from Mongoose
    is called to create a new model

    The newly created modle is then assigned to the "User" variable.
*/

const User = models.User || model('User', UserSchema);
export default User;
