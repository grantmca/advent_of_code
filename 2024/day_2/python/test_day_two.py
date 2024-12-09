import unittest
from day_two import calcuate_safety

class TestDayTwo(unittest.TestCase):

    def test_safe_foward(self):
        one = [1, 2, 3, 4, 5]
        self.assertEqual(calcuate_safety(one), True)

    def test_safe_backward(self):
        one = [5, 4, 3, 2, 1]
        self.assertEqual(calcuate_safety(one), True)

    def test_unsafe_forward(self):
        one = [1, 2, 3, 3, 5]
        self.assertEqual(calcuate_safety(one), False)

    def test_unsafe_backward(self):
        one = [5, 3, 3, 2, 1]
        self.assertEqual(calcuate_safety(one), False)

    def test_unsafe_backward_big_jump(self):
        one = [15, 4, 3, 2, 1]
        self.assertEqual(calcuate_safety(one), False)

    def test_unsafe_forward_big_jump(self):
        one = [2, 4, 5, 7, 15]
        self.assertEqual(calcuate_safety(one), False)
