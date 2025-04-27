const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://ruth4730:ruth4730@cluster0.ftr1g62.mongodb.net/")
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("connection error", err));
const courseSchema = new mongoose.Schema({
    name: { type: String, minlength: 1 },
    price: { type: Number, min: 0, required: true },
    arrTopic: {
        type: Array,
        validate: {
            validator: function (v) {
                return v && v.length > 0;
            },
            message: "Array should have at least one element"
        }
    },
    lecturer: { type: String, match: /^[a-zA-Z\s]+$/ },
    date: {
        type: Date,
        validate: {
            validator: function (v) {
                const nextYear = new Date();
                nextYear.setFullYear(nextYear.getFullYear() + 1);
                return v && v <= nextYear;
            },
            message: "Date should not be later than next year"
        }
    },
    isBA: { type: Boolean, default: false }
})
const Course = mongoose.model("Course", courseSchema);
const createCourse = async (name, price, arrTopic, lecturer, date, isBA) => {
    const course = new Course({
        name: name,
        price: price,
        arrTopic: arrTopic,
        lecturer: lecturer,
        date: date,
        isBA: isBA
    });
    try {
        const result = await course.save();
        console.log(result);
    } catch (error) {
        console.error("Error creating course:", error.message);
    }
}
const getCourseCount = async () => {
    try {
        const count = await Course.countDocuments();
        console.log("Number of courses:", count);
        return count;
    } catch (error) {
        console.error("Error counting courses:", error.message);
    }
};
const getCourses = async () => {
    try {
        const courses = await Course.find();
        console.log("Courses:", courses);
        return courses;
    } catch (error) {
        console.error("Error fetching courses:", error.message);
    }
};
const getCourseById = async (id) => {
    mongoose.Types.objectId.isValid(id);
    if (!mongoose.Types.objectId.isValid(id)) {
        console.log("Invalid ID format");
        return;
    }
    try {
        const course = await Course.findById(id);
        console.log("Course by ID:", course);
        return course;
    } catch (error) {
        console.error("Error fetching course by ID:", error.message);
    }
}
const func6 = async () => {
    const courses = await Course.find({
        isBA: true,
        arrTopic: { $in: ["server"] },
    })
        .sort({ name: -1 })
        .select({ name: 1, lecturer: 1 });
}
const func7 = async () => {
    const courses = await Course.find({
        arrTopic: { $in: ["server", "client"] }
    })
        .sort({ price: 1 })
        .select({ name: 1, lecturer: 1 });
}
const func8 = async () => {
    const courses = await Course.find({
        $or: [
            { price: { $gte: 15 } },
            { name: /וה/ }
        ]
    })
}
const updateCourseById = async (id, updateData) => {
    mongoose.Types.objectId.isValid(id);
    if (!mongoose.Types.objectId.isValid(id)) {
        console.log("Invalid ID format");
        return;
    }
    try {
        const course = await Course.findByIdAndUpdate(id, updateData, { new: true });
        console.log("Updated course:", course);
        return updateData;
    } catch (error) {
        console.error("Error updating course:", error.message);
    }
}
const deleteCourse = async () => {
    try {
        const result = await Course.deleteMany({ price: { eq: 0 } });
        console.log("Deleted courses:", result.deletedCount);
        return result.deletedCount;
    } catch (error) {
        console.error("Error deleting courses:", error.message);
    }
}
module.exports = {
    createCourse,
    getCourseCount,
    getCourses,
    getCourseById,
    func6,
    func7,
    func8,
    updateCourseById,
    deleteCourse
};

