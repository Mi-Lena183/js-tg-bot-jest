import { Telegraf } from 'telegraf';
import axios from 'axios';

const bot = new Telegraf('TOKEN');

describe('Команды', () => {
  beforeEach(() => {
    jest.spyOn(axios, 'get').mockImplementation(() => Promise.resolve({ data: {} }));
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('Команда /auth', () => {
    it('должна отвечать на команду /auth', async () => {
      const ctx = {
        message: {
          text: '/auth 123456',
        },
        reply: jest.fn(),
      };

      await bot.command('auth')(ctx);

      expect(ctx.reply).toHaveBeenCalledTimes(1);
      expect(ctx.reply).toHaveBeenCalledWith('Authentication successful! Entered code: 123456');
    });
  });

  describe('Команда /register', () => {
    it('должна отвечать на команду /register', async () => {
      const ctx = {
        message: {
          text: '/register username',
        },
        reply: jest.fn(),
      };

      await bot.command('register')(ctx);

      expect(ctx.reply).toHaveBeenCalledTimes(1);
      expect(ctx.reply).toHaveBeenCalledWith('User username registered successfully!');
    });
  });

  describe('Команда /unknown', () => {
    it('должна отвечать на неизвестную команду', async () => {
      const ctx = {
        message: {
          text: '/unknown',
        },
        reply: jest.fn(),
      };

      await bot.command('unknown')(ctx);

      expect(ctx.reply).toHaveBeenCalledTimes(1);
      expect(ctx.reply).toHaveBeenCalledWith('Unknown command. Please use /help for a list of available commands.');
    });
  });

  describe('Команда /help', () => {
    it('должна отвечать на команду /help', async () => {
      const ctx = {
        message: {
          text: '/help',
        },
        reply: jest.fn(),
      };

      await bot.command('help')(ctx);

      expect(ctx.reply).toHaveBeenCalledTimes(1);
      expect(ctx.reply).toHaveBeenCalledWith(expect.stringContaining('Available commands:'));
    });
  });

  describe('Команда /suggest', () => {
    it('должна отвечать на команду /suggest', async () => {
      const ctx = {
        message: {
          text: '/suggest',
        },
        reply: jest.fn(),
      };

      await bot.command('suggest')(ctx);

      expect(ctx.reply).toHaveBeenCalledTimes(1);
      expect(ctx.reply).toHaveBeenCalledWith('Thank you for your suggestion! We will review it and get back to you soon.');
    });
  });

  describe('Команда /support', () => {
    it('должна отвечать на команду /support', async () => {
      const ctx = {
        message: {
          text: '/support',
        },
        reply: jest.fn(),
      };

      await bot.command('support')(ctx);

      expect(ctx.reply).toHaveBeenCalledTimes(1);
      expect(ctx.reply).toHaveBeenCalledWith('Please contact us at support@recipebot.com for any support issues.');
    });
  });

  describe('Команда /about', () => {
    it('должна отвечать на команду /about', async () => {
      const ctx = {
        message: {
          text: '/about',
        },
        reply: jest.fn(),
      };

      await bot.command('about')(ctx);

      expect(ctx.reply).toHaveBeenCalledTimes(1);
      expect(ctx.reply).toHaveBeenCalledWith('Recipe Bot is a bot that helps you find recipes based on cuisinetype or ingredient.');
    });
  });
});