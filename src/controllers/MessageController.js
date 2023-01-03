const { GetMessages } = require("../services/MessageService");
const MessageService = require("../services/MessageService");

module.exports = {
    SaveMessages: async(data) => {
        MessageService.SaveMessages(data);
    },

    GetMessages : async(req,res) => {
        MessageService.GetMessages(req,res);
    }
};