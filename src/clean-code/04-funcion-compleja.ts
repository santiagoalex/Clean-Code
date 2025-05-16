const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }) => {
    if (isDead) return 1500
    if (isSeparated) return 2500
    if (isRetired) return 3000;
    return 4000;
}