import unittest
from day_one import calcuate_distances

class TestDayOne(unittest.TestCase):

    def test_assert(self):
        one = [3, 4, 2, 1, 3, 3]
        two = [4, 3, 5, 3, 9, 3]
        self.assertEqual(calcuate_distances(one, two), 11)
