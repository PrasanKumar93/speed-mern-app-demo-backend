/**
 * This file contains all npm/ 3rd party dependencies
 */
import express, { Express, Request, Response } from "express";
import cors from "cors";

import dotenv from "dotenv";

import { Seeder } from "mongo-seeding";

import path from "path";

import {
    MongoClient, ObjectId,

    //types
    MongoClientOptions, Db, Filter, Document, CollationOptions, Sort, ClientSession,
    InsertOneOptions, UpdateOptions, UpdateResult, BulkWriteOptions, InsertManyResult
} from "mongodb";

import * as yup from "yup";

import {
    merge,
    isEqual,
    has, isArray,
    set
} from "lodash";

import {
    Client as RedisOmClient,
    Entity as RedisEntity,
    Schema as RedisSchema
} from "redis-om";


const lodashGroup = {
    merge,
    isEqual,
    has, isArray,
    set
};


type CstObjectIdType = ObjectId | string | number;


export {
    express,
    cors,
    dotenv,
    MongoClient, ObjectId,
    lodashGroup,
    Seeder,
    path,
    yup,
    RedisOmClient, RedisEntity, RedisSchema
};

export type {
    //mongodb
    MongoClientOptions, Db, Filter, Document, CollationOptions, Sort, ClientSession,
    InsertOneOptions, UpdateOptions, UpdateResult, BulkWriteOptions, InsertManyResult,

    //express
    Express, Request, Response,

    //custom
    CstObjectIdType
};