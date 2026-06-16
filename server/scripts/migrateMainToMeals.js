const mongoose = require('mongoose');
const Food = require('../models/foodModel');
require('dotenv').config();

async function migrateMainToMeals() {
  try {
    // Connect to MongoDB
    await mongoose.connect("mongodb://localhost:27017/quicktap");
    console.log('✅ Connected to MongoDB');

    // Find all food items with category 'main'
    const mainItems = await Food.find({ category: 'main' });
    console.log(`📊 Found ${mainItems.length} items with category 'main'`);

    if (mainItems.length === 0) {
      console.log('✅ No items to migrate');
      process.exit(0);
    }

    // Update all 'main' items to 'meals'
    const result = await Food.updateMany(
      { category: 'main' },
      { $set: { category: 'meals' } }
    );

    console.log(`✅ Successfully updated ${result.modifiedCount} items from 'main' to 'meals'`);

    // Verify the update
    const updatedItems = await Food.find({ category: 'meals' });
    console.log(`✅ Verification: ${updatedItems.length} items now have category 'meals'`);

    // Check if any 'main' items remain
    const remainingMain = await Food.find({ category: 'main' });
    if (remainingMain.length > 0) {
      console.log(`⚠️ Warning: ${remainingMain.length} items still have category 'main'`);
    } else {
      console.log('✅ All items successfully migrated!');
    }

    process.exit(0);
  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  }
}

// Run the migration
migrateMainToMeals();
