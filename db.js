import mongoose from 'mongoose';

const connectDB = async() => {
    const connect = await mongoose.connect('mongodb://localhost:27017/twitter',{
        useNewUrlParser : true,
        useUnifiedTopology: true,
    });

    console.log('MongoDB connected');
}

export{ connectDB};