//database collection
import mongoos, { Schema, Mongoose } from 'mongoose';


//for mongoose, this is where we decide the shape of our data

export const HabitSchema = new Schema({
name: {
    type: String,
    required: true
}
});
//load or create
export default Mongoose.models.habits || Mongoose.model('habits', HabitsSchema);