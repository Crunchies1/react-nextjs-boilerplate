const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../server')

chai.use(chaiHttp)

const expect = chai.expect
