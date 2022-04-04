const mongoose = require('mongoose');
const validator = require('validator');

require('dotenv').config();




const app = express();

const PORT = process.env.PORT || 8000;
app.use(cors());
app.use(express.json());

mongoose.connect(url, { user: DB_USER, host: DB_HOST, password: DB_PASS, name: DB_NAME });
const connection = mongoose.connection;


connection.once(PORT, () => {
    console.log(`listening on port: ${DB_NAME}`);
});

app.post('user/registry', req, res => {
    return res.json({ msg: 'success' })
});

app.listen(PORT, 'localhost', () => {
    console.log(`listening on port:${port}`)
});

usernameSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: (value) => {
            return validator.isUsername(value)
        }
    }
})

module.exports = mongoose.model('Username', usernameSchema);

///////////////////////////////////
passwordSchema = new mongoose.Schema({
    password: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: (value) => {
            return validator.isPassword(value)
        }
    }
})

module.exports = mongoose.model('Password', passwordSchema);

//////////////////////////////////
firstNameSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: (value) => {
            return validator.isFirstName(value)
        }
    }
})

module.exports = mongoose.model('FirstName', firstNameSchema);
////////////////////////////////
lastNameSchema = new mongoose.Schema({
    lastName: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: (value) => {
            return validator.isLastName(value)
        }
    }
})

module.exports = mongoose.model('LastName', lastNameSchema);

///////////////////////////////////
dateOfBirthSchema = new mongoose.Schema({
    dateOfBirth: {
        type: Date,
        required: true,
        unique: true,
        lowercase: true,
        validate: (value) => {
            return validator.isDateOfBirth(value)
        }
    }
})

module.exports = mongoose.model('DateOfBirth', dateOfBirthSchema);
/////////////////////////

emailSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: (value) => {
            return validator.isEmail(value)
        }
    }
})

module.exports = mongoose.model('Email', emailSchema);

const EmailModel = require('./email')

const message = new EmailModel({
    email: 'ADD.MEEEE@GMAIL.COM'
})

message.save()
    .then(doc => {
        console.log(doc)
    })
    .catch(err => {
        console.error(err)
    });
//////////////////////////

telephoneSchema = new mongoose.Schema({
    telephone: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: (value) => {
            return validator.isTelephone(value)
        }
    }
})

module.exports = mongoose.model('Telephone', telephoneSchema);

const TelephoneModel = require('./telephone')

const Message = new TelephoneModel({
    telephone: '123456789'
})

Message.save()
    .then(doc => {
        console.log(doc)
    })
    .catch(err => {
        console.error(err)
    })

///////////////////////////////

genderSchema = new mongoose.Schema({
    gender: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: (value) => {
            return validator.isGender(value)
        }
    }
})

module.exports = mongoose.model('Gender', genderSchema);

const TelephoneModel = require('./gender')

const msg = new GenderModel({
    telephone: '123456789'
})

msg.save()
    .then(doc => {
        console.log(doc)
    })
    .catch(err => {
        console.error(err)
    })