import express, { Express, Router } from 'express';
import { CONFIG } from 'config';
import { MYSQL_CONNECTION_SEQUELIZE } from 'config'
import {
  inventoryRouters,
  userRouters,
  categoryRouters,
  roleRouters,
  orderRouters
} from 'routers';;
import {  tokenValidateMiddleware } from 'middlewares';

const app: Express = express();

const PORT = CONFIG.PORT;

app.use(express.json());
app.use(express.urlencoded());


app.use('/user', userRouters)
app.use('/role', roleRouters)

app.use(tokenValidateMiddleware)

app.use('/inventory', inventoryRouters)
app.use('/category', categoryRouters)
app.use('/order', orderRouters)

MYSQL_CONNECTION_SEQUELIZE
  .sync()
  .then((result) => {
    app.listen(PORT, () => {
      console.log(`[server]: Server is running at http://localhost:${PORT}`)
    })
  }).catch((e) => {
  console.log('Error', e)
})
