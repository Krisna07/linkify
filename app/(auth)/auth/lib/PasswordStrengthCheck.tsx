export default function calculatePasswordStrength(object: string) {
  //    let strengthName: string;
  // const lengthWeight = 20;
  const uppercaseWeight = 20;
  const lowercaseWeight = 20;
  const digitWeight = 20;
  const specialCharWeight = 20;
  //length
  const lengthScore = object.length > 8 ? 20 : (object.length / 8) * 20;

  // Check uppercase letters
  const uppercaseScore = object.match(/[A-Z]/) ? uppercaseWeight : 0;

  // Check lowercase letters
  const lowercaseScore = object.match(/[a-z]/) ? lowercaseWeight : 0;

  // Check digits
  const digitScore = object.match(/\d/) ? digitWeight : 0;

  // Check special characters
  const specialCharScore = object.match(/[!@#$%^&*()\-_=+{};:,<.>]/)
    ? specialCharWeight
    : 0;

  // Calculate total score
  const totalScore =
    lengthScore +
    uppercaseScore +
    lowercaseScore +
    digitScore +
    specialCharScore;

  // if (totalScore <= 0) {
  //   return strengthName("No password");
  // }

  // if (totalScore < 50) {
  //   return strengthName("Weak");
  // }
  // if (totalScore > 50 && totalScore < 80) {
  //   return strengthName("Still not there");
  // }
  // if (totalScore > 80) {
  //   return strengthName("Strong");
  // }
  return Math.floor(totalScore);
}
