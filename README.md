# Mongoose vs Knex vs Prisma: CRUD and Transaction Queries Comparison

| Operation | Mongoose (MongoDB) | Knex (SQL) | Prisma (SQL) |
|-----------|--------------------|------------|--------------|
| **০Create (Single)** | ```javascript<br>await User.create({ name: "Asif", email: "asif@example.com" });<br>``` | ```javascript<br>await knex('users').insert({ name: 'Asif', email: 'asif@example.com' }).returning('*');<br>``` | ```javascript<br>await prisma.user.create({ data: { name: 'Asif', email: 'asif@example.com' } });<br>``` |
| **০Create (Multiple)** | ```javascript<br>await User.insertMany([{ name: "Asif" }, { name: "Rahim" }]);<br>``` | ```javascript<br>await knex('users').insert([{ name: 'Asif' }, { name: 'Rahim' }]).returning('*');<br>``` | ```javascript<br>await prisma.user.createMany({ data: [{ name: 'Asif' }, { name: 'Rahim' }] });<br>``` |
| **০Read (Find One)** | ```javascript<br>await User.findOne({ email: "asif@example.com" });<br>``` | ```javascript<br>await knex('users').where({ email: 'asif@example.com' }).first();<br>``` | ```javascript<br>await prisma.user.findUnique({ where: { email: 'asif@example.com' } });<br>``` |
| **০Read (Find Many)** | ```javascript<br>await User.find({ name: "Asif" });<br>``` | ```javascript<br>await knex('users').where({ name: 'Asif' });<br>``` | ```javascript<br>await prisma.user.findMany({ where: { name: 'Asif' } });<br>``` |
| **০Read (Filter)** | ```javascript<br>await User.find({ age: { $gte: 18 } }).sort({ name: 1 });<br>``` | ```javascript<br>await knex('users').where('age', '>=', 18).orderBy('name', 'asc');<br>``` | ```javascript<br>await prisma.user.findMany({ where: { age: { gte: 18 } }, orderBy: { name: 'asc' } });<br>``` |
| **০Update (Single)** | ```javascript<br>await User.findOneAndUpdate({ email: "asif@example.com" }, { name: "Asif Khan" }, { new: true });<br>``` | ```javascript<br>await knex('users').where({ email: 'asif@example.com' }).update({ name: 'Asif Khan' }).returning('*');<br>``` | ```javascript<br>await prisma.user.update({ where: { email: 'asif@example.com' }, data: { name: 'Asif Khan' } });<br>``` |
| **০Update (Multiple)** | ```javascript<br>await User.updateMany({ age: { $lt: 18 } }, { status: "minor" });<br>``` | ```javascript<br>await knex('users').where('age', '<', 18).update({ status: 'minor' }).returning('*');<br>``` | ```javascript<br>await prisma.user.updateMany({ where: { age: { lt: 18 } }, data: { status: 'minor' } });<br>``` |
| **০Delete (Single)** | ```javascript<br>await User.findOneAndDelete({ email: "asif@example.com" });<br>``` | ```javascript<br>await knex('users').where({ email: 'asif@example.com' }).del().returning('*');<br>``` | ```javascript<br>await prisma.user.delete({ where: { email: 'asif@example.com' } });<br>``` |
| **০Delete (Multiple)** | ```javascript<br>await User.deleteMany({ status: "inactive" });<br>``` | ```javascript<br>await knex('users').where({ status: 'inactive' }).del().returning('*');<br>``` | ```javascript<br>await prisma.user.deleteMany({ where: { status: 'inactive' } });<br>``` |

# Advanced Mongoose vs Knex vs Prisma: CRUD, Join, Aggregation, and Transaction Queries

| Operation | Mongoose (MongoDB) | Knex (SQL) | Prisma (SQL) |
|-----------|--------------------|------------|--------------|
| **০Transaction** | ```javascript<br>const session = await User.startSession();<br>session.startTransaction();<br>try {<br>  await User.create([{ name: "Asif" }], { session });<br>  await Order.create([{ userId: "123" }], { session });<br>  await session.commitTransaction();<br>} catch (error) {<br>  await session.abortTransaction();<br>  throw error;<br>} finally {<br>  session.endSession();<br>}<br>``` | ```javascript<br>await knex.transaction(async (trx) => {<br>  await trx('users').insert({ name: 'Asif' });<br>  await trx('orders').insert({ user_id: 1 });<br>});<br>``` | ```javascript<br>await prisma.$transaction([<br>  prisma.user.create({ data: { name: 'Asif' } }),<br>  prisma.order.create({ data: { userId: 1 } })<br>]);<br>``` |
| **০Populate/Join (Users with Orders)** | ```javascript<br>await User.find().populate('orders');<br>// Schema: userSchema.virtual('orders', { ref: 'Order', localField: '_id', foreignField: 'userId' });<br>``` | ```javascript<br>await knex('users')<br>  .leftJoin('orders', 'users.id', 'orders.user_id')<br>  .select('users.name', 'orders.amount');<br>``` | ```javascript<br>await prisma.user.findMany({<br>  include: { orders: true },<br>});<br>// Schema: model Order { user User @relation(fields: [userId], references: [id]) }<br>``` |
| **০Aggregation (Count Orders per User)** | ```javascript<br>await User.aggregate([<br>  { $lookup: { from: 'orders', localField: '_id', foreignField: 'userId', as: 'orders' } },<br>  { $group: { _id: '$name', orderCount: { $sum: { $size: '$orders' } } } }<br>]);<br>``` | ```javascript<br>await knex('users')<br>  .leftJoin('orders', 'users.id', 'orders.user_id')<br>  .groupBy('users.name')<br>  .select('users.name')<br>  .count('orders.id as orderCount');<br>``` | ```javascript<br>await prisma.user.groupBy({<br>  by: ['name'],<br>  _count: { orders: true },<br>  where: { orders: { some: {} } }<br>});<br>``` |
| **০Aggregation (Sum Order Amounts per User)** | ```javascript<br>await User.aggregate([<br>  { $lookup: { from: 'orders', localField: '_id', foreignField: 'userId', as: 'orders' } },<br>  { $group: { _id: '$name', totalAmount: { $sum: { $sum: '$orders.amount' } } } }<br>]);<br>``` | ```javascript<br>await knex('users')<br>  .leftJoin('orders', 'users.id', 'orders.user_id')<br>  .groupBy('users.name')<br>  .select('users.name')<br>  .sum('orders.amount as totalAmount');<br>``` | ```javascript<br>await prisma.user.groupBy({<br>  by: ['name'],<br>  _sum: { orders: { amount: true } },<br>});<br>``` |

---

## Explanations for MERN Stack Developers
- **Mongoose (MongoDB)**:
  - **Populate**: Acts like a “join” by linking documents (e.g., `users` to `orders`) using `ref`. Requires schema setup with `virtual` or `ref`.
  - **Aggregation**: Uses `$lookup` for joins, `$group` for summaries (e.g., counting orders). Similar to JavaScript array methods but for DB.
  - **Transaction**: Session-based, ensures atomicity across collections. Verbose but powerful.

- **Knex (SQL)**:
  - **Join**: Explicit SQL `JOIN` (e.g., `leftJoin`) to combine tables. Requires table/column names and relationships (e.g., `users.id = orders.user_id`).
  - **Aggregation**: Uses SQL `GROUP BY`, `COUNT`, `SUM`. Feels like raw SQL but with JavaScript syntax.
  - **Transaction**: Simple `knex.transaction` wraps operations, rolling back on errors. Closer to SQL’s `BEGIN/COMMIT`.

- **Prisma (SQL)**:
  - **Join**: Handled via `include` for relations defined in `prisma.schema`. No raw SQL needed, feels like Mongoose’s `populate`.
  - **Aggregation**: Uses `groupBy`, `_count`, `_sum`. Structured and type-safe, less error-prone than Knex.
  - **Transaction**: `$transaction` or interactive `tx` for atomic operations. Cleanest syntax among the three.


## Tips for MERN Developers Learning SQL
1. **Map Mongoose to SQL**:
   - `find` → `SELECT ... WHERE`
   - `populate` → `JOIN`
   - `$group` → `GROUP BY`
2. **Start with Knex**: Its query builder syntax (e.g., `.where().join()`) feels like Mongoose but teaches SQL concepts.
3. **Use Prisma for Speed**: Prisma’s ORM feels like Mongoose, ideal for quick SQL adoption.
4. **Learn Joins**: Focus on `LEFT JOIN` (handles missing data) for user-order scenarios.
5. **Practice Aggregations**: Try `COUNT`, `SUM` in Knex/Prisma to mirror Mongoose’s `$group`.
6. **Test Locally**: Set up PostgreSQL with Docker, use your table queries in an Express app.
7. **Print the Table**: Pin it to your desk for reference during coding or interviews.