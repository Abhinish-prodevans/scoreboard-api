const expect = require('expect');
const request = require('supertest');
const ObjectID = require('mongodb').ObjectID;

const app = require('./../server').app;
// const {Todo} = require('./../models/todo');
// const {User} = require('./../models/user');
// const {todos , populateTodos, users , populateUsers} = require('./seed/seed');
const Player = require('./../models/player').Player;

//
// //dummy object for test
// beforeEach(populateUsers);
// beforeEach(populateTodos);


//it setup the data base every time we call the
// beforeEach((done) => {
//     Todo.remove({}).then(() => {
//     return Todo.insertMany(todos);
//   }).then(() => done());
// });

// describe('POST /todos', () => {
//     it('Should create a new todo', (done) => {
//         var text = 'Text todo text';
//
//         request(app)
//             .post('/todos')
//             .send({text})
//             .expect(200)
//             .expect((res) => {
//                 expect(res.body.text).toBe(text);
//             })
//             .end((err, res) => {
//                 if (err) {
//                     return done(err);
//                 }
//
//
//                 Todo.find({text}).then((todos) => {
//                     expect(todos.length).toBe(1);
//                     expect(todos[0].text).toBe(text);
//                     done();
//                 }).catch((e) => done(e));
//             });
//     });
//
//     it('Should not create todo with invalid body data', (done) => {
//        request(app)
//            .post('/todos')
//            .send({})
//            .expect(400)
//            .end((err,res) => {
//            if (err) {
//                return done(err);
//            }
//
//            Todo.find().then((todos) => {
//               expect(todos.length).toBe(2);
//               done();
//            }).catch((e) => done(e));
//            });
//     });
// });
//
// describe('GET /todos',() => {
//    it('Should get all todos', (done) => {
//        request(app)
//            .get('/todos')
//            .expect(200)
//            .expect((res) => {
//                 expect(res.body.todos.length).toBe(2);
//            })
//            .end(done);
//    })
// });
//
// //it should return the todo docs
//
// describe('GET /todos/:id', () => {
//    it('Should return todo doc', (done) => {
//        request(app)
//            .get(`/todos/${todos[0]._id.toHexString()}`)
//            .expect(200)
//            .expect((res) => {
//            expect(res.body.todos.text).toBe(todos[0].text);
//            })
//            .end(done);
//    });
//
//
//
// it('It should return 404 if todo not found', (done) => {
//     //make sure you get a 404 back
//
//     var iid = new ObjectID().toHexString();
//
//     request(app)
//         .get(`/todos/${iid}`)
//         .expect(200)
//         .expect((res) =>{
//         expect(res.body.todos).toBe(null);
//         })
//         .end(done);
//
// });
//
// it('should return 404 for non-object ids', (done) => {
//     //todos/123
//     var iid = '3a17f297d50929f032948a4311'
//     request(app)
//         .get(`/todos/${iid}`)
//         .expect(404)
//         .end(done);
// });
//
// });
//
// describe('PATCH /todos/id:', () => {
//     it('should update the todos', (done) => {
//         var hexId = todos[0]._id.toHexString();
//         var text = 'This should be the new text';
//
//         request(app)
//             .patch(`/todos/${hexId}`)
//             .send({
//                 completed:false,
//                 text
//             })
//             .expect(200)
//             .expect((res) => {
//                 expect(res.body.todo.text).toBe(text);
//                 expect(res.body.todo.completed).toBe(true);
//                 expect(res.body.todo.completedAt).toBe('number');
//
//             })
//             .end(done);
//     });
//
//     it('should clear completedAt when todo is note completed', (done) => {
//         var hexId = todos[0]._id.toHexString();
//         var text = 'This should be the new text';
//
//         request(app)
//             .patch(`/todos/${hexId}`)
//             .send({
//                 completed:false,
//                 text
//             })
//             .expect(200)
//             .expect((res) => {
//                 expect(res.body.todo.text).toBe(text);
//                 expect(res.body.todo.completed).toBe(false);
//                 expect(res.body.todo.completedAt).toNotExist();
//
//             })
//             .end(done);
//     });
// });
//
// describe('GET /users/me', () => {
//     it('should return user if authenticated', (done) => {
//         request(app)
//             .get('/users/me')
//             .set('x-auth', users[0].tokens[0].token)
//             .expect(200)
//             .expect((res) => {
//                 expect(res.body._id).toBe(users[0]._id.toHexString());
//                 expect(res.body.email).toBe(users[0].email);
//
//             })
//             .end(done);
//     });
//
//     it('should  return 401 if not authenticated', () => {
//         request(app)
//             .get('users/me')
//
//             .expect(401)
//             .expect((res) => {
//                 expect(res.body).toEqual({});
//             })
//             .end(done);
//     });
// });
//
// describe('POST /users', () => {
//     it('should create a user', () => {
//         var email = 'abhinish3@gmail.com';
//         var password = 'abhinish' ;
//
//         request(app)
//             .post('/users')
//             .send({
//                 email,
//                 password
//             })
//             .expect(200)
//             .expect((res) => {
//                 expect(res.header['x-auth']).toExist();
//                 expect(res.body.id).toExist();
//                 expect(res.body.email).toBe(email);
//             })
//             .end((err)=>{
//                 if(err){
//                 return done(err);
//                 }
//
//                 User.findOne({email}).then((user)=>{
//                     expect(user).toExist();
//                     expect(user.password).toNotBe(password);
//                     done();
//                 }).catch((e) => done(e));
//             });
//     });
//     it('should return validation error if request invalid ', (done) => {
//         request(app)
//             .post('/users')
//             .send({
//                 email: 'and',
//                 password:'123'
//             })
//             .expect(400)
//             .end(done);
//     });
//
//
//     it('should not create user if email in use', (done) => {
//         request(app)
//             .post('/users')
//             .send({
//                 email:user[0].email,
//                 password:'password123!'
//             })
//             .expect(400)
//             .end(done);
//     });
// });
//
// describe('POST /users/login', () => {
//     it('should login user and return auth token', (done)=> {
//         request(app)
//             .post('/users/login')
//             .send({
//                 email:users[1].email,
//                 password:users[1].password
//             })
//             .expect(200)
//             .expect((res) => {
//                 expect(res.header['x-auth']).toExist();
//
//             })
//             .end((err, res) => {
//                 if(err){
//                     return done(err);
//                 }
//
//                 User.findById(users[1]._id).then((user)=>{
//                     expect(user.tokens[0]).toInclude({
//                         access:'auth',
//                         token: res.headers['x-auth']
//                     });
//                     done()
//                 }).catch((e) => done(e));
//             });
//     });
//
//     it('should reject invalid login', (done) => {
//      //pass invalid password
//         request(app)
//             .post('/users/login')
//             .send({
//                 email:users[1].email,
//                 password:users[1].password + 'kulumanali'
//             })
//             .expect(400)
//             .expect((res) => {
//                 expect(res.header['x-auth']).toNotExist();
//
//             })
//             .end((err, res) => {
//                 if(err){
//                     return done(err);
//                 }
//
//                 User.findById(users[1]._id).then((user)=>{
//                     expect(user.tokens.length).toBe(0)
//                     done()
//                 }).catch((e) => done(e));
//             });
//     });
// });
//
// describe('DELETE user/me/token', () => {
//     it('should remove the auth token on logout', (done) =>  {
//
//         request(app)
//             .delete('/user/me/token')
//             .set('x-auth', users[0].tokens[0].token)
//             .expect(200)
//             .end((err,res) => {
//                 if(err) {
//                     return done(err);
//                 }
//
//                 User.findById(users[0]._id).then((user) => {
//                     expect(user.tokens.length).toBe(0);
//                     done();
//                 }).catch((e) => done(e));
//             });
//
//     });
// });

const player = [{
    _id:new ObjectID(),
    name: 'Abhinish',
},{
    _id:new ObjectID(),
    name: 'Abhinish2',
    score:10
}];

beforeEach((done) => {
    Player.remove({}).then(() => {
        return Player.insertMany(player);
    }).then(() => done());
});

describe('GET /leaderboard',() => {
    it('Should get all player', (done) => {
        request(app)
            .get('/leaderboard')
            .expect(200)
            .expect((res) => {
                expect(res.body.player.length).toBe(2);
            })
            .end(done);
    })
});



