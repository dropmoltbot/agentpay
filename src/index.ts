/**
 * ap1ph3x — Open-source payment client for AI agents
 * 
 * Zero-custody, multi-protocol (x402 + MPP), multi-chain.
 * No proprietary SDK lock-in. No custodial wallets. No API keys.
 * 
 * @module ap1ph3x
 */

export { Ap1ph3x, type Ap1ph3xConfig, type PayResult, type PaymentProtocol } from './ap1ph3x.js';
export { X402Client, type X402Challenge, type X402Payment } from './x402.js';
export { MPPClient, type MPPChallenge, type MPPPayment } from './mpp.js';
export { Wallet, type WalletConfig } from './wallet.js';
export { DEFAULT_CHAINS, type ChainConfig } from './chains.js';
export { version } from './version.js';

// API Registry — 1793+ APIs across 53 categories
export {
  ALL_APIS,
  CATEGORIES,
  getAPIsByCategory,
  getAPIsByAuth,
  getFreeAPIs,
  getX402APIs,
  getMPPAPIs,
  getSelfHostableAPIs,
  searchAPIs,
  type APIEndpoint,
  type APIAuthMethod,
  type APIProtocol,
  AI_AGENTS_APIS,
  AI_SDKS_APIS,
  ANIMALS_APIS,
  ANIME_APIS,
  ANTI_MALWARE_APIS,
  ART_AND_DESIGN_APIS,
  AUTHENTICATION_AND_AUTHORIZATION_APIS,
  BLOCKCHAIN_APIS,
  BOOKS_APIS,
  BUSINESS_APIS,
  CALENDAR_APIS,
  CLOUD_STORAGE_AND_FILE_SHARING_APIS,
  CONTINUOUS_INTEGRATION_APIS,
  CRYPTOCURRENCY_APIS,
  CURRENCY_EXCHANGE_APIS,
  DATA_VALIDATION_APIS,
  DEVELOPMENT_APIS,
  DICTIONARIES_APIS,
  DOCUMENTS_AND_PRODUCTIVITY_APIS,
  EMAIL_APIS,
  ENTERTAINMENT_APIS,
  ENVIRONMENT_APIS,
  EVENTS_APIS,
  FINANCE_APIS,
  FOOD_AND_DRINK_APIS,
  GAMES_AND_COMICS_APIS,
  GEOCODING_APIS,
  GOVERNMENT_APIS,
  HEALTH_APIS,
  JOBS_APIS,
  MACHINE_LEARNING_APIS,
  MUSIC_APIS,
  NEWS_APIS,
  OPEN_DATA_APIS,
  OPEN_SOURCE_PROJECTS_APIS,
  PATENT_APIS,
  PERSONALITY_APIS,
  PHONE_APIS,
  PHOTOGRAPHY_APIS,
  PROGRAMMING_APIS,
  SCIENCE_AND_MATH_APIS,
  SECURITY_APIS,
  SHOPPING_APIS,
  SOCIAL_APIS,
  SPORTS_AND_FITNESS_APIS,
  TEST_DATA_APIS,
  TEXT_ANALYSIS_APIS,
  TRACKING_APIS,
  TRANSPORTATION_APIS,
  URL_SHORTENERS_APIS,
  VEHICLE_APIS,
  VIDEO_APIS,
  WEATHER_APIS,
} from './registry.js';
