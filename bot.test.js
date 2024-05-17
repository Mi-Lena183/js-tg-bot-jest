import { Telegraf } from 'telegraf';
import axios from 'axios';

const bot = new Telegraf('TOKEN');

describe('Commands', () => {
  beforeEach(() => {
    jest.spyOn(axios, 'get').mockImplementation(() => Promise.resolve({ data: {} }));
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should respond to /auth command', async () => {
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

  it('should respond to /register command', async () => {
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

  it('should respond to /unknown command', async () => {
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

  it('should respond to /help command', async () => {
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

  it('should respond to /suggest command', async () => {
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

  it('should respond to /support command', async () => {
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

  it('should respond to /about command', async () => {
    const ctx = {
      message: {
        text: '/about',
      },
      reply: jest.fn(),
    };

    await bot.command('about')(ctx);

    expect(ctx.reply).toHaveBeenCalledTimes(1);
    expect(ctx.reply).toHaveBeenCalledWith('Recipe Bot is a bot that helps you find recipes based on cuisine type or ingredient.');
  });

  it('should respond to /random command', async () => {
    const ctx = {
      message: {
        text: '/random',
      },
      replyWithMarkdown: jest.fn(),
    };

    await bot.command('random')(ctx);

    expect(ctx.replyWithMarkdown).toHaveBeenCalledTimes(1);
    expect(ctx.replyWithMarkdown).toHaveBeenCalledWith(expect.stringContaining('🍽'));
  });

  it('should respond to /recipes command', async () => {
    const ctx = {
      message: {
        text: '/recipes',
      },
      reply: jest.fn(),
    };

    await bot.command('recipes')(ctx);

    expect(ctx.reply).toHaveBeenCalledTimes(1);
    expect(ctx.reply).toHaveBeenCalledWith('Available recipes: Italian, Mexican, Chinese, Indian, Thai, Japanese, Vegan, Vegetarian, Gluten-free, Desserts');
  });

  it('should respond to /cuisine command', async () => {
    const ctx = {
      message: {
        text: '/cuisine Italian',
      },
      replyWithMarkdown: jest.fn(),
    };

    await bot.command('cuisine')(ctx);

    expect(ctx.replyWithMarkdown).toHaveBeenCalledTimes(1);
    expect(ctx.replyWithMarkdown).toHaveBeenCalledWith(expect.stringContaining('🍽'));
  });

  it('should respond to /ingredient command', async () => {
    const ctx = {
      message: {
        text: '/ingredient chicken',
      },
      replyWithMarkdown: jest.fn(),
    };

    await bot.command('ingredient')(ctx);

    expect(ctx.replyWithMarkdown).toHaveBeenCalledTimes(1);
    expect(ctx.replyWithMarkdown).toHaveBeenCalledWith(expect.stringContaining('🍽'));
  });
});