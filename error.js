mongoose
.connect(process.env.MONGO_URI, {
useUnifiedTopology: true,
useNewUrlParser: true,
})
.then(() => console.log('DB Connected!'))
.catch(err => {
console.log(DB Connection Error: ${err.message});
});
