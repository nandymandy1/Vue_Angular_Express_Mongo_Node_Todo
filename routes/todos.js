const router = require("express").Router();

// Bring in the Tooo Model
const Todo = require("../model/Todo");
/**
 * @TYPE POST
 * @DECS TO create any new todo
 */
router.post("/todos", async (req, res) => {
  let { description } = req.body;
  let newTodo = new Todo({
    description
  });
  try {
    let todo = await newTodo.save();
    return res.json({
      todo,
      message: "Todo Created successfully",
      status: true
    });
  } catch (err) {
    return res.json({
      err,
      message: "Unable to create todo. Please try again later.",
      status: false
    });
  }
});

/**
 * @TYPE GET
 * @DECS TO get all todos
 */
router.get("/todos", async (req, res) => {
  try {
    let todos = await Todo.find().sort({ date: -1 });
    return res.json({
      todos,
      status: true
    });
  } catch (err) {
    return res.json({
      message: "Unable to get all the todos. Please try again later.",
      status: false
    });
  }
});

/**
 * @TYPE GET
 * @DECS TO get a particular todo
 */
router.get("/todos/:id", async (req, res) => {
  try {
    let todo = await Todo.findById(req.params.id);
    return res.json({
      todo,
      status: true
    });
  } catch (err) {
    return res.json({
      message: "Unable to get the todo. Please try again later.",
      status: false
    });
  }
});

/**
 * @TYPE PUT
 * @DECS To edit a particular todo
 */
router.put("/todos", async (req, res) => {
  try {
    let todo = await Todo.findById(req.query.id);
    todo.completedOn = Date.now();
    todo.status = true;
    let updatedTodo = await todo.save();
    return res.json({
      updatedTodo,
      message: "Todo Updated Successfully.",
      status: true
    });
  } catch (err) {
    return res.json({
      err,
      message: "Unable to update the todos. Please try again later.",
      status: false
    });
  }
});

/**
 * @TYPE DELETE
 * @DECS To delete a particular todo
 */
router.delete("/todos", async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.query.id).then(todo => {
      return res.json({
        todo,
        message: "Todo Delete Successfully.",
        status: true
      });
    });
  } catch (err) {
    return res.json({
      err,
      message: "Unable to update the todos. Please try again later.",
      status: false
    });
  }
});

module.exports = router;
