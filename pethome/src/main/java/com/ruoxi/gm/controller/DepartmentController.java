package com.ruoxi.gm.controller;

import com.ruoxi.gm.common.Result;
import com.ruoxi.gm.domain.Department;
import com.ruoxi.gm.query.DepartmentQuery;
import com.ruoxi.gm.service.IDepartmentService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;

/**
 * @author 若兮
 * @create 2022-02-21 14:43
 */
@RestController
@RequestMapping("/department")
@Api(tags = "部门接口")
public class DepartmentController {
    @Resource
    private IDepartmentService service;

    @ApiOperation(value = "部门添加或修改",notes = "有id则为修改，没有id则为添加")
    @PutMapping
    private Result addOrUpdate(@RequestBody Department department) {
        System.out.println(department);
        if (department.getId() != null) {
            try {
                service.update(department);
                return Result.me();
            } catch (Exception e) {
                return Result.me(false).setMsg("更新失败-" + e.getCause());
            }
        } else {
            try {
                service.add(department);
                return Result.me();
            } catch (Exception e) {
                return Result.me(false).setMsg("更新失败-" + e.getCause());
            }
        }
    }

    @ApiOperation("根据id删除部门")
    @DeleteMapping("/{id}")
    private Result delete(@PathVariable("id") Long id) {
        try {
            service.del(id);
            return Result.me();
        } catch (Exception e) {
            return Result.me(false).setMsg("删除失败-" + e.getCause());
        }
    }

    @ApiOperation("分页查询部门")
    @PostMapping
    private Result findByPage(@RequestBody DepartmentQuery query) {
        return Result.me(service.findByPage(query));
    }
}
