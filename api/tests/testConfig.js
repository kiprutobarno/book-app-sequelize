import chai from "chai";
import http from "chai-http";
import "chai/register-should";
import { expect } from "chai";
import app from "../index";

chai.use(http);

export { chai, app, expect };
