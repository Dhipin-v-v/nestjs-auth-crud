"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskSchema = void 0;
const mongoose_1 = require("mongoose");
exports.TaskSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, enum: ['OPEN', 'IN_PROGRESS', 'DONE'], default: 'OPEN' },
    userId: { type: String, required: true },
});
//# sourceMappingURL=task.schema.js.map