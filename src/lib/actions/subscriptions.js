'use server';

import { ServerMutation } from "../core/server";



export const createSubscription = async (subInfo) => {
    return ServerMutation ('/subscriptions', subInfo);
}