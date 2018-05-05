const Joi = require('joi');

const service = require('../services/student');
const validator = require('../validators/student');

// [GET] /student_directory
exports.directory = {
  handler: async () => {
    return service.directory();
  },
};

// [GET] /students
exports.list = {
  handler: async () => {
    return service.list();
  },
};

// [GET] /students/{id}
exports.get = {
  handler: async (req) => {
    const { id } = req.params;
    return service.get(id);
  },
  validate: {
    params: {
      id: Joi.string().guid({ version: 'uuidv4' }),
    },
  },
};

// [POST] /students
exports.create = {
  handler: async (req) => {
    const { payload } = req;
    return service.create(payload);
  },
  validate: {
    payload: validator.requiredPayload,
  },
};

// [PUT] /students/{id}
exports.update = {
  handler: async (req) => {
    const { id } = req.params;
    const { payload } = req;
    return service.update(id, payload);
  },
  validate: {
    payload: validator.payload,
    params: {
      id: Joi.string().guid({ version: 'uuidv4' }),
    },
  },
};

// [DELETE] /students/{id}
exports.delete = {
  handler: async (req) => {
    const { id } = req.params;
    return service.delete(id);
  },
  validate: {
    params: {
      id: Joi.string().guid({ version: 'uuidv4' }),
    },
  },
};

// [GET] /students/{id}/tickets
exports.tickets = {
  handler: async (req) => {
    const { id } = req.params;
    return service.tickets(id);
  },
  validate: {
    params: {
      id: Joi.string().guid({ version: 'uuidv4' }),
    },
  },
};

// [GET] /students/{id}/teams
exports.teams = {
  handler: async (req) => {
    const { id } = req.params;
    return service.teams(id);
  },
  validate: {
    params: {
      id: Joi.string().guid({ version: 'uuidv4' }),
    },
  },
};

// [GET] /students/{id}/invites
exports.invites = {
  handler: async (req) => {
    const { id } = req.params;
    return service.invites(id);
  },
  validate: {
    params: {
      id: Joi.string().guid({ version: 'uuidv4' }),
    },
  },
};

// [POST] /students/{studentId}/invites/{teamId}/accept
exports.acceptInvite = {
  handler: async (req) => {
    const { studentId, teamId } = req.params;
    return service.acceptInvite(studentId, teamId);
  },
  validate: {
    params: {
      studentId: Joi.string().guid({ version: 'uuidv4' }),
      teamId: Joi.string().guid({ version: 'uuidv4' }),
    },
  },
};

// [POST] /students/{studentId}/invites/{teamId}/reject
exports.rejectInvite = {
  handler: async (req) => {
    const { studentId, teamId } = req.params;
    return service.rejectInvite(studentId, teamId);
  },
  validate: {
    params: {
      studentId: Joi.string().guid({ version: 'uuidv4' }),
      teamId: Joi.string().guid({ version: 'uuidv4' }),
    },
  },
};
